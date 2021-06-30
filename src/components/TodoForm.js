import React from 'react'

function TodoForm() {
  return (
    <form className="TodoForm">
      <input type="text" name="todo__title" id="todo__title" />
      <textarea name="todo__body" id="todo__body" cols="30" rows="10"></textarea>
      <button type="submit">Add to list</button>
    </form>
  )
}

export default TodoForm
