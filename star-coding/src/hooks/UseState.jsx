import React, { useState } from 'react';

function heavyWork() {
  console.log('⚓엄청 무거운 작업!');
  return [1, 2];
}

export default function UseState() {
  // const [state, setState] = useState(heavyWork()); // 비권장
  const [state, setState] = useState(() => heavyWork()); // 권장
  // lazy initialization: useState의 초깃값으로 준 콜백함수는 컴포넌트 마운트시에만 실행된다.
  const [input, setInput] = useState('');
  const handleChangeEvent = e => setInput(e.target.value);
  const handleClickButton = () => {
    setState(state => [...state, input]);
  };
  return (
    <>
      <h1>useState</h1>
      <input value={input} onChange={handleChangeEvent} />
      <button onClick={handleClickButton}>add</button>
    </>
  );
}
