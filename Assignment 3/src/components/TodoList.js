// src/components/TodoList.js
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ tasks, toggleComplete, deleteTask, updateTaskText }) => {
  return (
    <TransitionGroup className="todo-list">
      {tasks.map((task) => (
        <CSSTransition key={task.id} timeout={500} classNames="fade">
          <TodoItem
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            updateTaskText={updateTaskText}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default TodoList
