import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    /*
        if (this.props.todo.isCompleted) {
            return {
                textDecoration : 'line-through'
            }
        }
        else {
            return {
                textDecoration : 'none'
            }
        }
        */
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.isCompleted ? "line-through" : "none",
    };
  };

  markComplete = (e) => {
    console.log(this.props);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete} />
          {this.props.todo.title}
        </p>
        <button style={btnStyle}>x</button>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "30%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
