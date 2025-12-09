import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},

    onSuccess: (newTodo) => {
      /* 1. 일반적 처리 */
      // queryClient.setQueryData<Todo[]>(QUERY_KEYS.todos.list, (prevTodos) => {
      //   return prevTodos ? [...prevTodos, newTodo] : [newTodo];
      // });
      // queryClient.invalidateQueries({
      //   queryKey: QUERY_KEYS.todos.list,
      // });

      /* 2. 데이터 정규화 */
      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todos.detail(newTodo.id),
        newTodo,
      );
      queryClient.setQueryData<Todo["id"][]>(
        QUERY_KEYS.todos.list,
        (prevTodoIds) =>
          !prevTodoIds ? [newTodo.id] : [...prevTodoIds, newTodo.id],
      );
    },

    onError: (error) => {
      window.alert(error.message);
    },
  });
};
