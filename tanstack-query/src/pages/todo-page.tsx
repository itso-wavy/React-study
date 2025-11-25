// import { useEffect, useState } from "react";
import TodoEditor from "@/components/todo-list/todo-editor";
import TodoList from "@/components/todo-list/todo-list";
import { useTodosData } from "@/hooks/querties/use-todos.data";

const TodoPage = () => {
  /*   const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const data = await fetchTodos();

      setTodos(data);
    } catch (error) {
      setError(error as any);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); */

  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중입니다.</div>;

  return (
    <div className="flex flex-col gap-5 p-4">
      <h1 className="text-2xl font-semibold">TodoList</h1>
      <TodoEditor />
      {todos && <TodoList todos={todos} />}
    </div>
  );
};

export default TodoPage;
