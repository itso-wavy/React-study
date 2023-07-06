import { useCounter } from './store/useCounter';

const ZCounter = () => {
  const { count, increase, decrease, reset } = useCounter();
  // const count = useCounter((state) => state.count + 1)

  return (
    <div className='counter'>
      <p>count: {count}</p>
      {/* <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button> */}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ZCounter;
