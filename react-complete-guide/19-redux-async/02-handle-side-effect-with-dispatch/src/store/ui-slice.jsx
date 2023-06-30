import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
  notification: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    cartToggle: state => {
      state.isCartOpen = !state.isCartOpen;
    },
    showNotification: (state, action) => {
      const { status, title, message } = action.payload;
      state.notification = {
        status,
        title,
        message,
      };
    },
  },
});

export const { cartToggle, showNotification } = uiSlice.actions;

export default uiSlice.reducer;
