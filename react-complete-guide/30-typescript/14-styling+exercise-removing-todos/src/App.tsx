import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { Todo } from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  const onAddTodo = (newTodo: string) => {
    setTodos(prevTodos => [...prevTodos, new Todo(newTodo)]); // 기존 state 사용하기
  };

  const handleTodoDelete = (targetId: string) => {
    setTodos(prevTodos => prevTodos.filter(({ id }) => id !== targetId));
  };

  return (
    <>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} deleteTodo={handleTodoDelete} />
    </>
  );
}

export default App;
