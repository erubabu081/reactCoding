
import './App.css'
//import CounterApp from './assets/components/Counter'
import UsersList from './assets/components/Users'
import Progressbar from './assets/components/Progressbar'

import FilterUsers from "../src/assets/components/Filterusers";
import TodoList from './assets/components/TodoList';
import { useState } from 'react';
function App() {
  const [progressPercent, setProgressPercent] = useState(0)
  const changeProgressPercent = (value) => {
    setProgressPercent(value)
  }

  return (
    
    <>
      
     <h2>Progress Percent:  {progressPercent}</h2>
      <Progressbar changeProgress = {changeProgressPercent}/>
      <br></br>
      <UsersList/>
      <FilterUsers/>
      <TodoList/>
    </>
  )
}

export default App
