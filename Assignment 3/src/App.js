// src/App.js
import React, { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterButtons from './components/FilterButtons'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task, priority) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text: task, priority, completed: false },
    ])
  }

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const updateTaskText = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    )
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed))
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        updateTaskText={updateTaskText}
      />
      <FilterButtons clearCompleted={clearCompleted} />
    </div>
  )
}

export default App
