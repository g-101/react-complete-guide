// O nome do arquivo do componente deve ser o mesmo da função do componente
// Um componente em react é apenas uma função em javascript.
import './ExpenseItem.css';
export const ExpenseItem = ({ props }) => {
  /*o nome do parametro deve ser o mesmo nome passado como key no elemento pai */
  const { title, amount, date } = props;

  return (
    <div className="expense-item ">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">{amount}</div>
      </div>
    </div>
  );
};
