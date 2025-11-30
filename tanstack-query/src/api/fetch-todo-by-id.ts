import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export const fetchTodoById = async (id: Todo["id"]) => {
  const response = await fetch(`${API_URL}/todos/${id}`);

  if (!response.ok) throw new Error("Failed Fetch!");

  const data = await response.json();
  return data;
};
