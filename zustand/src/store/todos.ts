import type { Todo } from "@/types/todo-list";
import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  devtools,
  createJSONStorage,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialStates = {
  todos: [
    {
      id: "1",
      content: "예시 할일입니다.",
    },
  ] as Todo[],
};

const useTodosStore = create(
  devtools(
    persist(
      immer(
        subscribeWithSelector(
          combine(initialStates, (set, _get) => ({
            actions: {
              createTodo: (content: Todo["content"]) =>
                set((store) => {
                  const newTodo: Todo = {
                    id: new Date().getTime().toString(),
                    content: content,
                  };
                  store.todos.push(newTodo);
                }),
              deleteTodo: (targetId: Todo["id"]) =>
                set((store) => {
                  store.todos = store.todos.filter(
                    (todo) => todo.id !== targetId,
                  );
                }),
            },
          })),
        ),
      ),
      {
        name: "todos",
        partialize: (store) => ({ todos: store.todos }),
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: "todos",
    },
  ),
);

export const useTodos = () => useTodosStore((store) => store.todos);
export const useTodoActions = () => useTodosStore((store) => store.actions);
