import classes from './CartItem.module.css';

const CartItem = item => {
  const { onRemoveItem, onAddItem } = item;

  const price = `$${item.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <p className={classes.price}>{price}</p>
          <p className={classes.amount}>{item.amount}</p>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveItem}>-</button>
        <button onClick={onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
