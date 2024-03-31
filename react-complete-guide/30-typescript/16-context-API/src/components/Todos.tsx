import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          deleteTodo={removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

/* bind(this, 첫번째 인자): 화살표 함수는 this 바인딩 생성 불가
const wavy = {
  name: 'wavy'
}

const someFunc = function (text) {
  console.log(text,this.name)
}

someFunc.bind(wavy, 'Hello,')()

// 'Hello, wavy'😁
 */
