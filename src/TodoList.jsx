import React, { useRef } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, dragTodo, dragStart, dragEnter }) => {
  return (
    <ul className='block'>
      {todos.map((todo, index) => {
        return <Todo 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          dragTodo={dragTodo} 
          dragStart={(e) => dragStart(e, index)} 
          dragEnter={(e) => dragEnter(e, index)} 
          draggable
        />
      })}
    </ul>
  )
}

export default TodoList;