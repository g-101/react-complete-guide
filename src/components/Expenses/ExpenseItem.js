// O nome do arquivo do componente deve ser o mesmo da função do componente
// Um componente em react é apenas uma função em javascript.
import './ExpenseItem.css';
import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
export const ExpenseItem = ({ props }) => {
  /*o nome do parametro deve ser o mesmo nome passado como key no elemento pai */
  const { title, amount, date } = props;
  const clickHandler = () => {
    alert('click!');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate props={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
