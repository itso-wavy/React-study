import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = meal => {
  const cartCtx = useContext(CartContext);

  const price = `$${meal.price.toFixed(2)}`;

  const addToCartHandler = inputAmount => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: inputAmount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={classes.description}>{meal.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
