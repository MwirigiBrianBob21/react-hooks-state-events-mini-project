import React from "react";


function Task({task, onHandleClick}) {



  return (
    <div className="task">
      <div className="label" name="category">{task.category}</div>
      <div className="text" name="text">{task.text}</div>
      <button className="delete" onClick={onHandleClick}>X</button>
    </div>
  );
}

export default Task;
