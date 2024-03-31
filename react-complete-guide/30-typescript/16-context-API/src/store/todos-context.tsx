import { createContext, useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos(prevTodos => [...prevTodos, new Todo(newTodo)]); // 기존 state 사용하기
  };

  const removeTodo = (targetId: string) => {
    setTodos(prevTodos => prevTodos.filter(({ id }) => id !== targetId));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
