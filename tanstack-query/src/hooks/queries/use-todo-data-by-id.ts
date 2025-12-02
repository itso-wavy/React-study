import { useQuery } from "@tanstack/react-query";

import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export const useTodoDataById = (id: Todo["id"]) => {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: QUERY_KEYS.todos.detail(id),
  });
};
