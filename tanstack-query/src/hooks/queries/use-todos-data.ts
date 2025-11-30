import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "@/api/fetch-todos";

export const useTodosData = () => {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"],
    retry: 0,
  });
};
