import React from 'react'

function TodoForm(props) {
  const {addTodoToTodos} = props;
  return (
    <form className="todo__Form" onSubmit={addTodoToTodos}>
      <input className="todo__title" type="text" name="todo__title" id="todo__title" placeholder="Title"/>
      <textarea className="todo__body" name="todo__body" id="todo__body" cols="30" rows="5" placeholder="Body" ></textarea>
      <button className="todo__button todo__add" type="submit">Add to list</button>
    </form>
  )
}

export default TodoForm
