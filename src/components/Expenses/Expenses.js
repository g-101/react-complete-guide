import { useState } from 'react';
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import { ExpensesFilter } from './ExpensesFilter';
import './Expenses.css';
export const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem props={props.expenses[0]} />
      <ExpenseItem props={props.expenses[1]} />
      <ExpenseItem props={props.expenses[2]} />
      <ExpenseItem props={props.expenses[3]} />
    </Card>
  );
};
