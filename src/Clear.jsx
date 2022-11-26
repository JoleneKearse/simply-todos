import React from 'react'

const Clear = ({ todos, handleClearTodos }) => {
  return (
    <div className='block flex'>
      <p className='info'>{todos.filter(todo => !todo.complete).length} thing{todos.filter(todo => !todo.complete).length > 1 || todos.filter(todo => !todo.complete).length == 0 ? 's' : null} to do!</p>
      <button onClick={handleClearTodos}>Clear Completed</button>
    </div>
  )
}

export default Clear