import React from 'react'

function TodoItem(props) {
  const {todo, deleteTodo} = props;
  return (
    <div className="todo__item">
      <h3>{todo.todoTitle}</h3>
      <p>{todo.todoBody}</p>
      <button>Update</button>
      <button onClick={() => {deleteTodo(todo.id)}}>Delete</button>
    </div>
  )
}

export default TodoItem
