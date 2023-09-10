import { useState } from "react";
import Task from "./Task";

const ToDo = () => {
  const [taskNumber, setTaskNumber] = useState(0);

  const handleAddTaskBtn = () => {
    setTaskNumber(taskNumber + 1);
  };

  return (
    <div>
      <h1>To Do</h1>
      <ol>
        <Task></Task>
      </ol>
      <button
        className=" btn btn-primary w-full p-3"
        onClick={handleAddTaskBtn}
      >
        Add Task
      </button>
    </div>
  );
};

export default ToDo;
