import React from 'react';

const addOne = x => x + 1;
addOne(1); //2

// const addOneThunk = x => {
//   const thunk = () => addOne(x);
//   return thunk;
// };
const addOneThunk = (x = () => addOne(x));

/* THUNK란 작업을 미루기 위해 함수 형태로 만드는 것, 즉 고차함수구나! */

const fn = addOneThunk(1);
setTimeout(() => {
  const value = fn();
  console.log(value);
}, 1000);

const sampleThunk = (dispatch, getState) => {};
