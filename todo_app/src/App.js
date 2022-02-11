import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
class TodoApp extends React.Component {

  state = {
    todos: ["lavar a louça",
      "estudar react",
      "5 estrelas"
    ]
  }

  onSaveTodo = (newTodo) => {
    const todosList = this.state.todos;
    this.setState({ todos: [...todosList, newTodo] })
  }


  render() {
    return (
      <div>
        <h1>Nosso TodoApp</h1>
        <TodoForm
          onSaveTodo={this.onSaveTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
export default TodoApp;
