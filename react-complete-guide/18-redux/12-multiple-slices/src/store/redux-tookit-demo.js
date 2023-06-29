// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

/* 
- createSlice = reducer + actionCreator
- configureStore = createStore + combineReducers
 */

const initialState = { count: 0, isShow: false };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'plus':
//       return { ...state, count: state.count + action.payload };
//     case 'minus':
//       return { ...state, count: state.count - 1 };
//     case 'toggle':
//       return { ...state, isShow: !state.isShow };
//     default:
//       return state;
//   }
// };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // redux-toolkit => immer 자동 적용 = state 불변성 유지
    decrease(state) {
      state.count--;
    },
    increase(state, action) {
      state.count += action.payload;
    },
    toggleCounter(state) {
      state.isShow = !state.isShow;
    },
  },
});

// const store = createStore(counterReducer);
const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
