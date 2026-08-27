import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const baseCellStyle = {
    padding: '12px',
    borderRight: '1px solid #ccc',
  };
  return (
    <>
      <h1>Welcome to Task Tracker System</h1>
      <h2>Manage Your Tasks Efficiently and Stay Organized</h2>
      
      {/* Input box */}
      <input 
        type="text" 
        placeholder="Enter new task" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        style={{ height: '3rem', width: '18rem' }}
      />

      {/* Button Add Task */}
      <button 
        onClick={() => {
          if (!task.trim()) return; // Prevents adding empty tasks
          setTasks([...tasks, {
            id: Date.now(),
            title: task,
            completed: false
          }]); 
          setTask("");
        }} 
        style={{ marginLeft: '3rem', height: '3rem' }}
      >
        Add new Task +
      </button>

      {/* Task List Table */}
     <table style={{ width: '70%', marginTop: '2rem', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            {/* 1. Added explicit width (70%) and forced left-alignment */}
            <th style={{ ...baseCellStyle, width: '70%', textAlign: 'left' }}>Task Name</th>
            {/* 2. Added explicit width (15%) and forced center-alignment */}
            <th style={{ ...baseCellStyle, width: '15%', textAlign: 'center' }}>Status</th>
            {/* 3. Added explicit width (15%), center-aligned, removed right border */}
            <th style={{ padding: '12px', width: '15%', textAlign: 'center' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id} style={{ borderBottom: '1px solid #ccc' }}>  
              {/* Task Name Cell - Left Aligned */}
              <td style={{ ...baseCellStyle, textAlign: 'left' }}> 
                <input 
                  type="checkbox" 
                  checked={t.completed} 
                  onChange={() => {
                    setTasks(tasks.map((item) =>
                      item.id === t.id ? { ...item, completed: !item.completed } : item
                    ));
                  }}
                /> 
                <span style={{ marginLeft: '10px' }}>{t.title}</span> 
              </td>
              
              {/* Status Cell - Center Aligned */}
              <td style={{ ...baseCellStyle, textAlign: 'center' }}> 
                <span>{t.completed ? "Completed" : "Pending"}</span> 
              </td>

              {/* Delete Cell - Center Aligned (No right border) */}
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <button onClick={() => setTasks(tasks.filter((item) => item.id !== t.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
