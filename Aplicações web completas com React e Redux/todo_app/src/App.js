import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const TodoApp = props => {
  return (
    <div>
      <h1>Nosso TodoApp</h1>
      <TodoForm />
      <TodoList />

    </div>
  );
}
export default TodoApp;
