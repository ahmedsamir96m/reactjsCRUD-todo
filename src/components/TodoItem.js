import React from 'react';
import editIcon from '../assets/icons/edit-icon.svg'

function TodoItem(props) {
  const {todo, deleteTodo, editTodo} = props;
  return (
    <div className="todo__item">
      <h3>{todo.todoTitle}</h3>
      <p>{todo.todoBody}</p>
      <button onClick={() => {editTodo(todo.id)}}>
        <img src={editIcon} alt="" />
      </button>
      <button onClick={() => {deleteTodo(todo.id)}}>Delete</button>
    </div>
  )
}

export default TodoItem
