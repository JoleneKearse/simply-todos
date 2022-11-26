import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <ul className='block'>
      {todos.map((todo) => {
        return <Todo key={todo} todo={todo} />
      })}
    </ul>
  )
}

export default TodoList