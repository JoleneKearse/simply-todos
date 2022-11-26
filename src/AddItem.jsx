import React from 'react'

const AddItem = ({ handleAddTodo, handleEnterTodo, todoNameRef }) => {
  return (
    <div className='block flex'>
      <input ref={todoNameRef} type="text" onKeyPress={handleEnterTodo} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddItem;