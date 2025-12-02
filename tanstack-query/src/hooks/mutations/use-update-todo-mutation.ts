import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: (updatedTodo) => {
      // Optimistic Update
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todos.list, (prevTodos) => {
        if (!prevTodos) return [];

        return prevTodos.map((prevTodo) => {
          return prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo } // 아이템 업데이트
            : prevTodo;
        });
      });
    },
    onSettled: () => {},
    onSuccess: () => {},
    onError: () => {},
  });
};
