import { useState } from 'react';
import TodoList from './TodoList';

function App() {

  return (
    <>
      <TodoList />
      <input type="text"/>
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </>
  )
}

export default App
