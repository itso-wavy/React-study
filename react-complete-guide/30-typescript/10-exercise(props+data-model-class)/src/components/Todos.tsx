import React from 'react';
import { Todo } from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        // <li key={todo.id}>{todo.text}</li>
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;
