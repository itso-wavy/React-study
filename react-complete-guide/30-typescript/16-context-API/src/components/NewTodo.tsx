import { useContext, useRef } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const inputText = todoTextInputRef.current!.value;
    if (inputText.trim().length === 0) {
      return; // 공백 밸리데이팅
    }
    // 투두리스트에 투두 추가
    addTodo(inputText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>New Todo: </label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
