import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newItems = state.items.concat(action.item); // 순수함수, push_X, concat_O
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }
  // if (action.type === 'REMOVE') {
  //   const newItems = state.items.push(action.item);
  //   const newTotalAmount =
  //     state.totalAmount + action.item.price * action.item.amount;
  //   return {
  //     items: newItems,
  //     totalAmount: newTotalAmount,
  //   };
  // }
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
