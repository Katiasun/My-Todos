import { useState } from "react";
import styles from "./App.module.css";
import Form from "./Form/Form";
import TodoList from "./TodoList/TodoList";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    if (text === "") {
      return;
    }
    const newTodo = { id: nanoid(), text: text, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };

  const handleCompleteToggle = (id, completed) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed);
  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>My Todos</h1>
      <Form className={styles.form} onAdd={handleAdd} />
      <div className={styles.content}>
        <TodoList
          title={`To Do (${uncompletedTodos.length})`}
          todos={uncompletedTodos}
          onDelete={handleDelete}
          onCompleteToggle={handleCompleteToggle}
        />
        <TodoList
          title={`Done (${completedTodos.length})`}
          todos={completedTodos}
          onDelete={handleDelete}
          onCompleteToggle={handleCompleteToggle}
        />
      </div>
    </div>
  );
}

export default App;
