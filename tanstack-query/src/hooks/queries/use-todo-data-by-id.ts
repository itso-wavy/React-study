import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "@/api/fetch-todo-by-id";
import type { Todo } from "@/types";

export const useTodoDataById = (id: Todo["id"]) => {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],
  });
};
