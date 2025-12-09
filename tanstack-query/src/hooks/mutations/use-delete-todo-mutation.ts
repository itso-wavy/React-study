import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTodo } from "@/api/delete-to-do";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedTodo) => {
      // 1. 캐시 무효화 -> invalidateQueries: 전체 데이터를 다시 가져오므로 성능적 고려 사항 존재
      // ✅ 2. 수정 요청의 응답값 활용 -> onSuccess: 요청 처리까지 소요시간 동안 기다려야 함
      // 3. 낙관적 업데이트 -> onMutate: todo 아이템을 삭제했다가 에러시엔 원복해야 함. ux상 어색해 보일 수 있음

      /* queryClient.setQueryData<Todo[]>(QUERY_KEYS.todos.list, (prevTodos) => {
        if (!prevTodos) return [];

        return prevTodos.filter((prevTodo) => prevTodo.id !== deletedTodo.id);
      }); */

      queryClient.removeQueries({
        queryKey: QUERY_KEYS.todos.detail(deletedTodo.id),
      });

      queryClient.setQueryData<Todo["id"][]>(
        QUERY_KEYS.todos.list,
        (prevTodoIds) => {
          return !prevTodoIds
            ? undefined
            : prevTodoIds.filter((prevTodoId) => prevTodoId !== deletedTodo.id);
        },
      );
    },
  });
};
