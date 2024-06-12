// src/components/TodoInput.js
import React, { useState } from 'react'

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
      addTask(task, priority)
      setTask('')
      setPriority('medium')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TodoInput
