const redux = require('redux');

// 상태 또는 파견(dispatch) 조치 사용

// 리듀서 생성(초깃값, 액션) => 액션 객체
const reducer = (state = { counter: 5 }, action) => {
  if (action.type === 'plus') return { counter: (state.counter += 1) };
  if (action.type === 'minus') return { counter: (state.counter -= 1) };
  return state;
};

// 스토어 생성
const store = redux.createStore(reducer);

// 구독자 생성: 스토어에서 최신 state 가져오기
// const subscriber = () => {
//   const latestState = store.getState(); // 최신 state
//   console.log(latestState);
// };

// store.subscribe(subscriber);

export default store;
// store.dispatch({ type: 'plus' });
// store.dispatch({ type: 'minus' });
