import React, { Component } from "react";

class TodoFetch extends Component {
  state = {
    isLoading: false,
    todo: null
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const todo = await response.json();

    this.setState({ todo, isLoading: false });
  }

  render() {
    const { isLoading, todo } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <div>{todo && todo.title}</div>;
  }
}

export default TodoFetch;
