import { useState, useRef } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const onSubmitHandler = e => {
    e.preventDefault();
    const inputAmount = amountInputRef.current.value;
    if (inputAmount.trim().length === 0 || inputAmount < 1 || inputAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <p className={classes.alert}>Please enter a valid amount (1-5).</p>
      )}
    </form>
  );
};

export default MealItemForm;
