import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from '../../assets/data/dummyMeals';
import MealItem from './MealItem/MealItem.jsx';
import Card from '../UI/Card.jsx';

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map(meal => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
