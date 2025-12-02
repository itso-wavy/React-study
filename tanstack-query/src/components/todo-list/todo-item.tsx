import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
// import { useTodoActions } from "@/store/todos";
import type { Todo } from "@/types";

const TodoItem = ({ todo }: { todo: Todo }) => {
  // const { deleteTodo } = useTodoActions();

  // const handleDeleteClick = (e: React.MouseEvent) => {
  //   e.preventDefault();

  //   deleteTodo(todo.id);
  // };

  const { mutate } = useUpdateTodoMutation();

  const handleCheckboxClick = () => {
    if (!todo.id) return;
    mutate({ id: todo.id, isDone: !todo.isDone });
  };

  const handleDeleteClick = () => {};

  return (
    <div>
      <div className="flex items-center justify-between rounded-sm border px-3 py-2">
        <div className="flex w-full items-center gap-4">
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={handleCheckboxClick}
          />

          <Link
            id={todo.id}
            to={`/todolist/${todo.id}`}
            className="text-start text-sm font-semibold text-zinc-600"
          >
            {todo.content}
          </Link>
        </div>
        <Button
          variant="destructive"
          onClick={handleDeleteClick}
          className="cursor-pointer"
        >
          삭제
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
