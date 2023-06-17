import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isFormShow, setIsFormShow] = useState(false);

  const saveExpenseDataHandler = expenseData => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onAddExpense(data);
  };

  const onClickHandler = () => setIsFormShow(true);
  const onSubmitHandler = () => setIsFormShow(false);

  return (
    <div className='new-expense'>
      {isFormShow ? (
        <ExpenseForm
          onSubmit={onSubmitHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={onClickHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
