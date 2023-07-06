import React from 'react';
import ReducerEx1 from '../components/useReducer/ReducerEx1';
import ReducerEx2 from '../components/useReducer/ReducerEx2';

/* 
- reducer: state을 업데이트하는 역할(은행)
- dispatch: state 업데이트를 위한 요구
- action: 요구의 내용
 */

export default function UseReducer() {
  return (
    <>
      <h1>useReducer</h1>
      <ReducerEx1 />
      <br />
      <ReducerEx2 />
    </>
  );
}
