import React from 'react';
import { Todo } from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  deleteTodo: (id: string) => void;
}> = props => {
  return (
    <ul className={classes.todos}>
      {props.items.map(todo => (
        // <li key={todo.id}>{todo.text}</li>
        <TodoItem
          key={todo.id}
          text={todo.text}
          deleteTodo={props.deleteTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
