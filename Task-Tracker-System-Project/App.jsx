import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  return (
    <>
    <h1>Welcome to Task Tracker System</h1>
    <h2>Manage Your Tasks Efficiently and Stay Organized</h2>
    <input type="text" 
           placeholder="Enter new task" 
           value={task} onChange={(e) => setTask(e.target.value)} />

     <button onClick={(e)=>{setTasks([...tasks, task]); setTask("")}}>Add new Task +</button>

     {tasks.map((task)=>(
      <p key={task}>{task}</p>
    ) )}

    </>
  )
}




export default App
