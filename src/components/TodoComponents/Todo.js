import React from "react";

import "./Todo.css";

const ToDo = ({ item, completeToDo }) => {
  return (
    <p
      onClick={() => completeToDo(item)}
      className={item.completed === true ? "toDoComplete" : ""}
    >
      {item.task}
    </p>
  );
};

export default ToDo;
