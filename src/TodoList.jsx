import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className='block'>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      })}
    </ul>
  )
}

export default TodoList