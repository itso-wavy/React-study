import type { Todo } from "@/types";

import TodoItem from "./todo-item";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return todos.length > 0 ? (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  ) : (
    <div className="mx-auto text-sm font-semibold text-zinc-400">
      할일이 없습니다.
    </div>
  );
};

export default TodoList;
