import { createStore } from 'redux';

const initialState = { count: 0, isShow: false };

const counterReducer = (state = initialState, action) => {
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
