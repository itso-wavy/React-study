import React from 'react';
import { BsFillCalendar2PlusFill } from 'react-icons/bs';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <BsFillCalendar2PlusFill />
      </button>
    </form>
  );
};

export default TodoInsert;
