import type { Todo } from "@/types";

export const API_URL = "http://localhost:3000";

export const QUERY_KEYS = {
  todos: {
    all: ["todo"],
    list: ["todo", "list"],
    detail: (id: Todo["id"]) => ["todo", "detail", id],
  },
};
