import { Link } from "react-router";

import { useTodoActions } from "@/store/todos";
import { Button } from "../ui/button";

import type { Todo } from "@/types";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { deleteTodo } = useTodoActions();

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();

    deleteTodo(todo.id);
  };

  return (
    <Link
      id={todo.id}
      to={`/todolist/${todo.id}`}
      className="flex items-center justify-between rounded-sm border px-3 py-2"
    >
      <div className="text-sm font-semibold text-zinc-600">{todo.content}</div>
      <Button
        variant="destructive"
        onClick={handleDeleteClick}
        className="cursor-pointer"
      >
        삭제
      </Button>
    </Link>
  );
};

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
