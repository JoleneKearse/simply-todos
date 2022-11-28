import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  }

  return (
    <div className='todolist'>
      <li>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
          draggable
        />
        {todo.name}
      </li>
    </div>
  )
}

export default Todo