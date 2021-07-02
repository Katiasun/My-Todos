import styles from "./Form.module.css";
import cn from "classnames";
import { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(text);
    setText("");
  };

  return (
    <form className={cn(styles.form, props.className)} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
