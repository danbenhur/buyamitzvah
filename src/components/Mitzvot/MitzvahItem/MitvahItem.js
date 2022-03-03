import classes from "./MitzvahItem.module.css";
import MitzvahItemForm from "./MitzvahItemForm";

const MitzvahItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MitzvahItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MitzvahItem;
