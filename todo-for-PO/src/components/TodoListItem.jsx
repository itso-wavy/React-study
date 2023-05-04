import React from 'react';
import './TodoListItem.scss';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <button
        className={cn('checkbox', { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </button>
      <button className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default TodoListItem;
