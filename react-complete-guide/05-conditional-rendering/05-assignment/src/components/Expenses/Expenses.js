import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredData = items.filter(
    data => data.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>NO DATA...</p>;
  if (filteredData.length > 0)
    expensesContent = filteredData.map(data => (
      <ExpenseItem
        key={data.id}
        title={data.title}
        date={data.date}
        amount={data.amount}
      />
    ));

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
