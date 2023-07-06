import { useReducer, useState } from 'react';

// 🎁 예제 1
const initialState = 0;
const ACTION_TYPE = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.DEPOSIT:
      return state + action.payload;
    case ACTION_TYPE.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

const ReducerEx1 = () => {
  const [number, setNumber] = useState(0);
  const [currentState, dispatch] = useReducer(reducerFn, initialState);

  const depositHandler = () => {
    dispatch({ type: ACTION_TYPE.DEPOSIT, payload: number });
  };
  const withdrawHandler = () => {
    dispatch({ type: ACTION_TYPE.WITHDRAW, payload: number });
  };

  return (
    <>
      <strong>- 비교적 간단한 예제</strong>
      <p>잔고: {currentState}원</p>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
        step='1000'
      />
      <button onClick={depositHandler}>예금</button>
      <button onClick={withdrawHandler}>출금</button>
    </>
  );
};

export default ReducerEx1;
