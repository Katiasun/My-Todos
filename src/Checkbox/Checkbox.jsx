import styles from "./Checkbox.module.css";
import cn from "classnames";

const Checkbox = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.checked);
  };

  return (
    <input
      className={cn(styles.checkbox, props.className)}
      type="checkbox"
      checked={props.checked}
      onChange={handleChange}
    />
  );
};

export default Checkbox;
