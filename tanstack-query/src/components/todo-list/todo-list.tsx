import type { Todo } from "@/types";

import TodoItem from "./todo-item";

const TodoList = ({ todoIds }: { todoIds: Todo["id"][] }) => {
  return todoIds.length > 0 ? (
    <div className="flex flex-col gap-2">
      {todoIds.map((todoId) => (
        <TodoItem key={todoId} id={todoId} />
      ))}
    </div>
  ) : (
    <div className="mx-auto text-sm font-semibold text-zinc-400">
      할일이 없습니다.
    </div>
  );
};

export default TodoList;
