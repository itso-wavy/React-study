import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = meal => {
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={classes.description}>{meal.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <MealItemForm id={meal.id} />
    </li>
  );
};

export default MealItem;
