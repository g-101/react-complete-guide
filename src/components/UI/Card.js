import './Card.css';
export const Card = props => {
  // em classes vai concatenar a classe card com a classe que esta sendo definida no outro componente
  // ex: class="card expenses"
  // props.ClassName captura a classe do outro componente
  const classes = 'card ' + props.className;
  // children é uma palavra reservada que captura o conteudo que esta dentro de uma tag
  return <div className={classes}>{props.children}</div>;
};
