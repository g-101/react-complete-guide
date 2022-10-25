import './Expenses.css';
import { Card } from './Card';
import { ExpenseItem } from './ExpenseItem';
export const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem props={expenses[0]} />
      <ExpenseItem props={expenses[1]} />
      <ExpenseItem props={expenses[2]} />
      <ExpenseItem props={expenses[3]} />
    </Card>
  );
};
