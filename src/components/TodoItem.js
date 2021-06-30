import React from 'react'

function TodoItem(props) {
  const {todo} = props;
  return (
    <div className="todo__item">
      <h3>{todo.todoTitle}</h3>
      <p>{todo.todoBody}</p>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default TodoItem
