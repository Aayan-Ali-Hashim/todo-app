import React from 'react'

const Dropdown = () => {
  return (
    <span className='dropdown-menu'>
      <select name="task-category" id="task-category">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    </span>
  )
}

export default Dropdown
