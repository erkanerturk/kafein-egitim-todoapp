import React, { Component } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import TodoFetch from "./TodoFetch";

import { withRouter } from "react-router-dom";

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
        <TodoList />

        <TodoFetch />

        <button
          className="btn btn-primary"
          onClick={() => this.props.history.push("/user")}
        >
          User page
        </button>
      </div>
    );
  }
}

export default withRouter(Todo);
