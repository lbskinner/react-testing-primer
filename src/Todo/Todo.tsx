import React from "react";

type TodoProps = {
  description: string;
};

class Todo extends React.Component<TodoProps> {
  render() {
    return <div>{this.props.description}</div>;
  }
}

export default Todo;
