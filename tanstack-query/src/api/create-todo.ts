import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function createTodo(content: Todo["content"]) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({
      // id, // 메서드에 의해 문자열로 자동 생성됨
      content,
      isDone: false,
    }),
  });

  if (!response.ok) throw new Error("Failed to create todo");

  const data: Todo = await response.json();
  return data;
}
