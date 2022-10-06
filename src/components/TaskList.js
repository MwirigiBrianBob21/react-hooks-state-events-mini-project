import React, { useState } from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const[task, setTask] = useState([])


  function removeFromArray () {
    // remove object with name
    setTask(tasks => 
      tasks.filter(obj =>{
        console.log(obj)
      }))
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {/* nn */}
       {tasks.map((task)=> (<Task key ={task.name} task={task} onHandleClick={removeFromArray}/>))}


    </div>
  );
}

export default TaskList;
