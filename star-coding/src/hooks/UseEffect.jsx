import React, { useEffect, useState } from 'react';

const Timer = props => {
  // 마운트: 첫렌더링
  // 업데이트: 재렌더링
  // 언마운트: 화면에서 사라짐
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('째깍째깍⏰');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 중지!😉');
    };
  }, []);

  return (
    <div>
      <span>콘솔 타이머를 시작합니다.</span>
    </div>
  );
};

export default function UseEffect() {
  const [timerIsShowed, setTimerIsShowed] = useState(false);
  const handleClickButton = () => setTimerIsShowed(!timerIsShowed);

  return (
    <>
      <h1>useEffect</h1>
      {timerIsShowed && <Timer />}
      <button onClick={handleClickButton}>Toggle Timer</button>
    </>
  );
}
