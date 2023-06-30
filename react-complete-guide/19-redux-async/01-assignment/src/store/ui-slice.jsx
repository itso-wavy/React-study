import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    cartToggle: state => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { cartToggle } = uiSlice.actions;

export default uiSlice.reducer;
