import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,

    onMutate: async (updatedTodo) => {
      /* ==================== Optimistic Update ==================== */

      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todos.list, // 업데이트 중 들어오는 요청 취소, 수동으로 캐시 데이터를 세팅하고 있으므로 중간에 제어할 수 없는 요청이 있어서는 안 됨
      });

      const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todos.list);

      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todos.list, (prevTodos) => {
        if (!prevTodos) return [];

        return prevTodos.map((prevTodo) => {
          return prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo } // 아이템 업데이트
            : prevTodo;
        });
      });

      return {
        prevTodos,
      };
    },
    // onSuccess: () => {},
    onError: (error, variables, context) => {
      /* 에러 발생시 캐시 데이터 롤백
      - context: onMutate 반환값
      - variables: onMutate 인자
      */

      const prevTodos = context?.prevTodos;
      if (!prevTodos) return;

      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todos.list, prevTodos);
    },
    onSettled: () => {
      /* mutation 완료시 백엔드와 데이터 동기화 */
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todos.list, // 캐시 데이터 최신화
      });
    },
  });
};
