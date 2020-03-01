import React, { Component } from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/modules/todo/todo.action";

class TodoForm extends Component {
  state = {
    title: "",
    description: ""
  };

  handleSubmit = () => {
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Başlık</label>
          <input
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Açıklama</label>
          <input
            value={this.state.description}
            onChange={event =>
              this.setState({ description: event.target.value })
            }
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Kaydet
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(TodoForm);
