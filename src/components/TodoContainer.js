import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem';


function TodoContainer() {
  const [todos, setTodos] = useState([{
    todoTitle: "Todo Title",
    todoBody: "Todo Body",
    id: null,
    isComplete: false
  }])

  const addTodoToTodos = (event) => {
    event.preventDefault();

    const todoTitle = event.target.querySelector('input#todo__title').value;
    const todoBody = event.target.querySelector('textarea#todo__body').value;

    setTodos([...todos, {
      todoTitle,
      todoBody,
      id: (Math.random() * 102165657.1323247),
      isComplete: false
    }])
    
    console.log(todoBody, todoTitle)
  }

  return (
    <div>
      <TodoForm addTodoToTodos={addTodoToTodos}/>
      <div className="todo__container">
        <ul>
        {todos.map(todo => {
          return <li key={todo.id}>
            <TodoItem todo={todo}/>
          </li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default TodoContainer
