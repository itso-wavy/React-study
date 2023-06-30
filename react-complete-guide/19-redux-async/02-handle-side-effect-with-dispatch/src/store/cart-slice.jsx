import { createSlice } from '@reduxjs/toolkit';
import { showNotification } from './ui-slice';

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

// 함수를 반환하는 유형의 `액션 크리에이터`
export const sendCartData = cart => {
  // 알림: pending, success, error

  return async dispatch => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://kinetic-octagon-368403-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) throw new Error();
    };

    try {
      await sendRequest();

      dispatch(
        showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (err) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
