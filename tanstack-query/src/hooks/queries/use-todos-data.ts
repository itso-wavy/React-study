import { useQuery } from "@tanstack/react-query";

import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";

export const useTodosData = () => {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: QUERY_KEYS.todos.list,
  });
};
