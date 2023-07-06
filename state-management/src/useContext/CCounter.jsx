import { useContext } from 'react';
import { CountContext, CountProvider } from './context/CounterContext';

const CCounter = () => {
  const { count, increase, decrease } = useContext(CountContext);

  return (
    <CountProvider>
      <p>count: {count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </CountProvider>
  );
};

export default CCounter;
