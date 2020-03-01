import React, { Component } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import TodoFetch from "./TodoFetch";

class Todo extends Component {
  state = {
    todos: []
  };

  saveTodo = todo => {
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, todo]
      };
    });
  };

  render() {
    return (
      <div>
        <TodoForm saveTodo={this.saveTodo} />
        <TodoList data={this.state.todos} />

        <TodoFetch />
      </div>
    );
  }
}

export default Todo;
