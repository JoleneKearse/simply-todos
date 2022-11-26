import React from 'react'

const Clear = ({ todos }) => {
  return (
    <div className='block flex'>
      <p className='info'>{todos.length} thing{todos.length > 1 || todos.length == 0 ? 's' : null} to do!</p>
      <button>Clear Completed</button>
    </div>
  )
}

export default Clear