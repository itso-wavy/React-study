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
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todos.list, (prevTodos) => {
        return prevTodos ? [...prevTodos, newTodo] : [newTodo];
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todos.list,
      });
    },

    onError: (error) => {
      window.alert(error.message);
    },
  });
};
