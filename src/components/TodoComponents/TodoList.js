// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import ToDo from "./Todo";

const ToDoList = ({ list }) => {
  return (
    <div>
      {list.map((item, i) => (
        <ToDo item={item.task} key={i} />
      ))}
    </div>
  );
};

export default ToDoList;
