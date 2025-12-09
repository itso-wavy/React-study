import { useQuery } from "@tanstack/react-query";

import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export const useTodoDataById = (
  id: Todo["id"],
  type: "LIST" | "DETAIL" = "LIST",
) => {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: QUERY_KEYS.todos.detail(id),
    enabled: type === "DETAIL", // false 조건에서는 data가 항상 fresh한 상태
  });
};
