import { useReducer } from 'react';

const initialState = 0;

const countReducer = (prev, next) => {
  if (next < 10) return next;
  return prev;
};

const RCounter = () => {
  const [counter, setCounter] = useReducer(countReducer, initialState);

  return (
    <div className='counter'>
      <p>count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default RCounter;
