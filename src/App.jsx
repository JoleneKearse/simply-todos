import { useState, useRef } from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';
import Clear from './Clear';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    })
    todoNameRef.current.value = null;
  }

  return (
    <div className='block'>
      <h1>Simply Todos</h1>
      <AddItem handleAddTodo={handleAddTodo} todoNameRef={todoNameRef} />
      <TodoList todos={todos} />
      <Clear todos={todos} />
    </div>
  )
}

export default App
