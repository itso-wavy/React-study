import { createSlice } from '@reduxjs/toolkit';

const initialCountState = { count: 0, isShow: false };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCountState,
  reducers: {
    /* redux-toolkit => immer 자동 적용 = state 불변성 유지 */
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
