import { useState } from 'react';
import './ExpenseItem.css';
import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
export const ExpenseItem = ({ props }) => {
  const { title, amount, date } = props;
  // O useState é um hook que retorna um array,
  //com o state atual e um callback para atualizar os dados.
  const [titleState, setTitle] = useState(title);
  const clickHandler = () => {
    alert('click!');
    setTitle('Updated!');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate props={date} />
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
