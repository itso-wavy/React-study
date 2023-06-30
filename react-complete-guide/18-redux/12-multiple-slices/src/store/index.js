import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authSlice from './auth-slice';

/* 
- createSlice = reducer + actionCreator
- configureStore = createStore + combineReducers
 */

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export default store;
