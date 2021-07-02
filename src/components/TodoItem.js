import React from 'react';
import editIcon from '../assets/icons/edit-icon.svg'
import deleteIcon from '../assets/icons/delete-icon.svg'

function TodoItem(props) {
  const {todo, deleteTodo, editTodo} = props;
  return (
    <div className="todo__item">
      <h3 className="todo__item-title" title={todo.title}>{todo.todoTitle}</h3>
      <p className="todo__item-body" title={todo.todoBody}>{todo.todoBody}</p>
      <div className="todo__buttons">
        <button className="todo__button todo__edit" onClick={() => {editTodo(todo.id)}} title="Edit">
          <img className="todo__icon" src={editIcon} alt="Update Todo" />
        </button>
        <button className="todo__button todo__delete" onClick={() => {deleteTodo(todo.id)}} title="Delete">
          <img className="todo__icon" src={deleteIcon} alt="Delete Todo" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
