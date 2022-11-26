import React from 'react'

const AddItem = ({ handleAddTodo, todoNameRef }) => {
  return (
    <div className='block flex'>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddItem