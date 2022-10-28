import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';
export const ExpenseItem = props => {
  // O useState é um hook que retorna um array,
  //com o state atual e um callback para atualizar os dados.
  const { title, amount, date } = props.expense;
  // const [titleState, setTitle] = useState(title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};
