import React from 'react';
import editIcon from '../assets/icons/edit-icon.svg'
import deleteIcon from '../assets/icons/delete-icon.svg'

function TodoItem(props) {
  const {todo, deleteTodo, editTodo} = props;
  return (
    <div className="todo__item">
      <h3 title={todo.title}>{todo.todoTitle}</h3>
      <p title={todo.todoBody}>{todo.todoBody}</p>
      <button onClick={() => {editTodo(todo.id)}} title="Edit">
        <img src={editIcon} alt="Update Todo" />
      </button>
      <button onClick={() => {deleteTodo(todo.id)}} title="Delete">
        <img src={deleteIcon} alt="Delete Todo" />
      </button>
    </div>
  )
}

export default TodoItem
