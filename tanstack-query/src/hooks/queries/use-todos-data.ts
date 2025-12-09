import { useQuery, useQueryClient } from "@tanstack/react-query";

import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export const useTodosData = () => {
  const queryClient = useQueryClient();
  return useQuery({
    /* ============ 캐시 정규화하기(데이터 평준화) ============ */
    // queryFn: fetchTodos,
    queryFn: async () => {
      const todos = await fetchTodos();

      todos.forEach((todo) =>
        queryClient.setQueryData<Todo>(QUERY_KEYS.todos.detail(todo.id), todo),
      );

      return todos.map((todo) => todo.id);
    },
    queryKey: QUERY_KEYS.todos.list,
  });
};
