import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'

const counterReducer = (state = { count: 0, isShow: false }, action) => {
  switch (action.type) {
    case 'plus':
      return { ...state, count: state.count + action.payload };
    case 'minus':
      return { ...state, count: state.count - 1 };
    case 'toggle':
      return { ...state, isShow: !state.isShow };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
