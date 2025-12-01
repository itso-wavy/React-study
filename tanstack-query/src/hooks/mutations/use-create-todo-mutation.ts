import { useMutation } from "@tanstack/react-query";

import { createTodo } from "@/api/create-todo";

export const useCreateTodoMutation = () => {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: () => {},
    onError: () => {},
  });
};
