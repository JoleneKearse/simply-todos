import React from 'react';

const TodoList = ({ todos, toggleTodo, dragStart, dragEnter, dropTodo }) => {
  return (
    <ul className='block'>
      {
        todos &&
        todos.map((todo, key) => (
          <li
            className='todolist'
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            onDragStart={(e) => dragStart(e, key)}
            onDragEnter={(e) => dragEnter(e, key)}
            onDragEnd={dropTodo}
          >
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={handleTodoClick}
              draggable
            />
            {todo.name}
          </li>
        ))}
    </ul>
  )
}

export default TodoList;