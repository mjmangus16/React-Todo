import React from "react";

import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";

import "./App.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    inputData: {},
    toDoArray: []
  };

  inputDataHandler = val => {
    this.setState({
      inputData: { task: val, id: new Date().getTime(), completed: false }
    });
  };

  pushDataHandler = () => {
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.inputData]
    });
  };

  completeToDoHandler = item => {
    this.setState(prevState => {
      return {
        toDoArray: prevState.toDoArray.map(toDo => {
          if (toDo.id === item.id) {
            return { ...toDo, completed: !toDo.completed };
          } else {
            return toDo;
          }
        })
      };
    });
    console.log(this.state.toDoArray);
  };

  clearDataHandler = () => {
    this.setState(prevState => {
      return {
        toDoArray: prevState.toDoArray.filter(toDo => toDo.completed === false)
      };
    });
  };

  render() {
    const { toDoArray } = this.state;
    return (
      <div className="app-container">
        <h2>Welcome to your Todo App!</h2>
        <ToDoList list={toDoArray} complete={this.completeToDoHandler} />
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
