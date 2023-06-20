import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let newItems;

  if (action.type === 'ADD') {
    const existingItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      // 기존 동일한 아이템 존재하는 경우 수량 업데이트
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      newItems = [...state.items];
      newItems[existingItemIndex] = updatedItem;
    } else {
      // 기존 동일한 아이템 존재하지 않는 경우 새 아이템 추가
      newItems = state.items.concat(action.item); // 순수함수, push_X, concat_O
    }
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex(
      item => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem.amount === 1) {
      newItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      newItems = [...state.items];
      newItems[existingItemIndex] = updatedItem;
    }
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return {
      items: newItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = item => {
    dispatchCartState({ type: 'ADD', item: item });
  };
  const removeItemHandler = id => {
    dispatchCartState({ type: 'REMOVE', id: id });
  };

  const cartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
