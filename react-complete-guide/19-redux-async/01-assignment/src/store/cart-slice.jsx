import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      if (existingItem) {
        // 기존 아이템 중 새 아이템과 같은 id의 상품이 있다면
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      } else {
        // 기존 아이템 중 새 아이템과 같은 id의 상품이 없다면
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
      state.totalQuantity++;
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      if (existingItem.quantity === 1)
        state.items = state.items.filter(item => item.id !== action.payload.id);
      else existingItem.quantity--;

      state.totalQuantity--;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
