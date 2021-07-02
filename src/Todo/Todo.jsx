import styles from "./Todo.module.css";
import cn from "classnames";
import { ReactComponent as DeleteIcon } from "./Delete.svg";
import Checkbox from "../Checkbox/Checkbox";

const Todo = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const handleChange = (checked) => {
    props.onCompleteToggle(props.id, checked);
  };

  return (
    <div
      className={cn(styles.wrapper, props.className, {
        [styles.completed]: props.completed,
      })}
    >
      {props.text}
      <button className={styles.delete} onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <Checkbox
        className={styles.checkbox}
        checked={props.completed}
        onChange={handleChange}
      />
    </div>
  );
};

export default Todo;
