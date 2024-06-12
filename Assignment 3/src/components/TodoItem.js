// src/components/TodoItem.js
import React, { useState } from 'react'

const TodoItem = ({ task, toggleComplete, deleteTask, updateTaskText }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(task.text)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    updateTaskText(task.id, newText)
    setIsEditing(false)
  }

  return (
    <div
      className={`todo-item ${task.completed ? 'completed' : ''} ${
        task.priority
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <span onDoubleClick={handleEdit}>{task.text}</span>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
