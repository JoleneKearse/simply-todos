import { useState, useRef, useEffect } from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';
import Clear from './Clear';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const KEY_ID = 'todoslist';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(KEY_ID)) || []);
  const todoNameRef = useRef();

  // to load on refresh
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY_ID));
    setTodos(storedTodos);
  }, []);

  // to save changes
  useEffect(() => {
    localStorage.setItem(KEY_ID, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    })
    // reset input field
    todoNameRef.current.value = null;
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div className='block'>
      <h1>Simply Todos</h1>
      <AddItem handleAddTodo={handleAddTodo} todoNameRef={todoNameRef} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <Clear todos={todos} handleClearTodos={handleClearTodos} />
    </div>
  )
}

export default App;
