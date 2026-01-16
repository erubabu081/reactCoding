import React, { useState } from "react";

const TodoList = () => {
  const initialTask = [];
  const [taskList, setTaskList] = useState(initialTask);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    const newTask = {
      id: taskList.length + 1,
      taskName: taskName,
      completed: false,
    };
    const newtaskList = [...taskList, newTask];
    setTaskList(newtaskList);
    setTaskName("");
  };
  const handleOnchange = (val) => {
    setTaskName(val);
  };
  const handleDeleteTask = (taskId) => {
    const freshList = taskList.filter((item) => item.id !== taskId);
    console.log(freshList);
    setTaskList(freshList);
  };
  const handleCheckBox = (taskId) => {
    console.log(taskId);
    const newTask = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTaskList(newTask);
  };

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        name="taskItem"
        placeholder="Enter to task item"
        className="border w-100 h-15 p-3"
        value={taskName}
        onChange={(e) => handleOnchange(e.target.value)}
      ></input>
      <button
        type="submit"
        name="addItem"
        className="bg-amber-300 border-teal-100 m-5 h-15 p-4"
        onClick={() => addTask()}
      >
        Add
      </button>
      {taskName}
      <h2>Task List</h2>

      {taskList.map((item) => (
        <div className="taskList" key={item.id}>
          <input
            type="checkbox"
            name="checkbox"
            checked={item.completed}
            onClick={() => handleCheckBox(item.id)}
          />
          <span className={`${item.completed ? "line-through" : ""}`}>
            {item.taskName}
          </span>
          <button
            name="delete"
            className="border-amber-400 p-3 border-2 rounded-2xl bg-amber-800 m-3 "
            onClick={() => handleDeleteTask(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
