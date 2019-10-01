import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const todoData = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  },
  {
    task: "Take out Trash",
    id: 3,
    completed: false
  },
  {
    task: "Pay Bills",
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoData: [...this.state.todoData, newTodo]
    });
  };

  toggleTodo = todoId => {
    console.log(todoId);

    this.setState({
      todoData: this.state.todoData.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(todo => !todo.completed)
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="app">
        <div className="header">
          <h1>Todos!</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todoData={this.state.todoData}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
