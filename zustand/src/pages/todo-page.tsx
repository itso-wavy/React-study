import TodoEditor from "@/components/todo-list/todo-editor";
import TodoList from "@/components/todo-list/todo-list";
import { useTodos } from "@/store/todos";

const TodoPage = () => {
  const todos = useTodos();

  return (
    <div className="flex flex-col gap-5 p-4">
      <h1 className="text-2xl font-semibold">TodoList</h1>
      <TodoEditor />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoPage;
