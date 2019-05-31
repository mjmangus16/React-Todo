import React from "react";

const ToDoForm = ({ inputData, pushData, clearData }) => {
  return (
    <div>
      <input onChange={e => inputData(e.target.value)} />
      <button onClick={pushData}>Add ToDo</button>
      <button onClick={clearData}>Clear Completed</button>
    </div>
  );
};

export default ToDoForm;
