import React, { Component } from "react";

import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.data.map(todo => {
          return <li className="list-group-item">{todo.title}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = store => {
  return {
    todos: store.todo.todos
  };
};

export default TodoList;
