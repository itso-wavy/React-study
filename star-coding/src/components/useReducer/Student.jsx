import React from 'react';
import store from './store.jsx';

export default function Student({ id, name, dispatch, isHere }) {
  const { ACTION_TYPE } = store;

  return (
    <>
      <p
        onClick={() => dispatch({ type: ACTION_TYPE.STRIKE, payload: { id } })}
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
        }}
      >
        {name}
      </p>
      <button
        onClick={() => dispatch({ type: ACTION_TYPE.DEL, payload: { id } })}
      >
        삭제
      </button>
    </>
  );
}
