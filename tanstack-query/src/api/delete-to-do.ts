import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export const deleteTodo = async (id: Todo["id"]) => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("delete todo failed");

  const deletedTodo: Todo = await response.json();
  return deletedTodo;
};
