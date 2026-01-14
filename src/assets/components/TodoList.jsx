import React, {useState} from 'react';

const TodoList = () => {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([])
    const handleOnchage = (e) => {
    setTaskName(e.target.value)
    }
const addTask = () => {
    const taskObj = {
        'id': Math.random(),
        'taskName': taskName
    }
    setTaskList([...taskList, taskObj])
    setTaskName('')
   
}
const handleCheckBox = (id) => {
    const newTaskList =taskList.filter(task => task.id !== id)
setTaskList(newTaskList)
console.log(newTaskList)
}
  return (
    <>
    <div>TodoList</div> 
    <input name='todolist' placeholder='Enter To do task' value= {taskName} onChange={(e) => handleOnchage(e)}></input>
    <button name='submit' value='Submit' onClick={() =>addTask()}>Add Task</button>
    {taskName}
    { taskList.map((item) => (
        <li key={item.id} onClick={() => handleCheckBox(item.id)}><span><input type= 'checkbox'></input></span>{item.taskName} </li>
    ) ) }
    
    </>
  )
}

export default TodoList