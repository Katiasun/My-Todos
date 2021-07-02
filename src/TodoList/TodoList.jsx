import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

function TodoList(props) {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.body}>
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            className={styles.todo}
            text={todo.text}
            onDelete={props.onDelete}
            onCompleteToggle={props.onCompleteToggle}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
