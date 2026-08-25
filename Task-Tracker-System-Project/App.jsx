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
           value={task} onChange={(e) => setTask(e.target.value)} 
           style={{height: '3rem',width: '18rem'}}/>

     <button onClick={(e)=>{setTasks([...tasks, 
     {
      id:Date.now(),
      title : task,
      completed : false
     }]); 
      setTask("")}} 
     style={{marginLeft: '3rem', height: '3rem'}}>
      Add new Task +</button>
    
     {tasks.map((task)=>(
      <div key={task.id}>
        <input type="checkbox" 
               checked={task.completed} 
               onChange={() => {
                 setTasks(
            tasks.map((t) =>
                t.id === task.id
                    ? { ...t, completed: !t.completed }
                    : t
            )
        );
    }}/>
        <span>  {task.title}</span>
        <span style={{ marginLeft: '6rem' }}>
          {task.completed ? "Completed" : "Pending"}
        </span>

       <button onClick={()=> setTasks(tasks.filter((t) => t.id !== task.id))} 
       style={{marginLeft: '8rem'}}>Delete</button>

      </div>
    ) )}

    </>
  )
}




export default App
