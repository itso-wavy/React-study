import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
// import { useTodoActions } from "@/store/todos";
import type { Todo } from "@/types";

const TodoItem = ({ id }: { id: Todo["id"] }) => {
  // const { deleteTodo } = useTodoActions();

  // const handleDeleteClick = (e: React.MouseEvent) => {
  //   e.preventDefault();

  //   deleteTodo(todo.id);
  // };

  const { data: todo } = useTodoDataById(id, "LIST");

  const { mutate: updateMutate } = useUpdateTodoMutation();
  const { mutate: deleteMutate, isPending: isDeleting } =
    useDeleteTodoMutation();

  const handleCheckboxClick = () => {
    if (!todo.id) return;
    updateMutate({ id: todo.id, isDone: !todo.isDone });
  };

  const handleDeleteClick = () => {
    if (!todo.id) return;
    deleteMutate(todo.id);
  };

  return (
    <div>
      <div className="flex items-center justify-between rounded-sm border px-3 py-2">
        <div className="flex w-full items-center gap-4">
          <input
            type="checkbox"
            disabled={isDeleting}
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
          disabled={isDeleting}
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
