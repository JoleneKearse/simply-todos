import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div className='todolist'>
      <li>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </li>
    </div>
  )
}

export default Todo