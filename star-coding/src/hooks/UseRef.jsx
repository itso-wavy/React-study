import React, { useEffect, useRef, useState } from 'react';

const RefEx1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  console.log('🎨rendering...');

  const increaseCountState = () => setCount(count + 1);

  const increaseCountRef = () => {
    countRef.current += 1;
    console.log('Ref: ', countRef.current);
  };

  const increaseCountVar = () => {
    countVar += 1;
    console.log('var: ', countVar);
  };

  return (
    <>
      <strong>- state, ref, variable의 비교</strong>
      <p>state: {count}</p>
      <p>ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
      <button onClick={increaseCountVar}>Var 올려</button>
    </>
  );
};

const RefEx2 = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const alertLogin = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <strong>- ref로 dom 요소 조작</strong>
      <div>
        <input ref={inputRef} type='text' placeholder='여기 주목✨' />
        <button onClick={alertLogin}>포커스 이동?</button>
      </div>
    </>
  );
};
export default function UseRef() {
  return (
    <>
      <h1>useRef</h1>
      <RefEx1 />
      <br />
      <RefEx2 />
    </>
  );
}
