import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const SCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    setCount(count + 1);
    // console.log(count);
  };

  useEffect(() => {
    console.log('👽' + count);
  }, [count]);

  // const increase = async () => {
  //   await setCount(count + 1);
  //   await setCount(count + 1);
  //   console.log(count);
  // };

  /*   const increase = () => {
    flushSync(() => {
      setCount(count => count + 1);
      setCount(count => count + 1);
      setCount(count => count + 1);
      setCount(count => count + 1);
    });

    console.log('count: ', count);
    // DOM is updated

    /* 이것은 안 됨! 용량이 커서 성능이 크게 저하됨
      flushSync(() => {
      setCount(count + 1);
    });
  }; */

  return (
    <div className='counter'>
      <em>useState is a kind of async</em>
      <p>count: {count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default SCounter;
