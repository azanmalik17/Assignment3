// src/components/FilterButtons.js
import React from 'react'

const FilterButtons = ({ clearCompleted }) => {
  return (
    <div className="filter-buttons">
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default FilterButtons
