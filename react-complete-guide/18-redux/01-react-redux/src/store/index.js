import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'plus':
      return { count: state.count + action.payload };
    case 'minus':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
