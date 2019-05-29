import React from "react";

import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    inputData: {},
    toDoArray: []
  };

  inputDataHandler = val => {
    this.setState({ inputData: { task: val, completed: false } });
  };

  pushDataHandler = () => {
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.inputData]
    });
  };

  completeToDoHandler = item => {
    item.completed = true;
  };

  clearDataHandler = () => {
    this.setState({ toDoArray: [] });
  };

  render() {
    const { toDoArray } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList list={toDoArray} />
        <ToDoForm
          inputData={this.inputDataHandler}
          pushData={this.pushDataHandler}
          clearData={this.clearDataHandler}
        />
      </div>
    );
  }
}

export default App;
