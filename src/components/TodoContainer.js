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

  return (
    <div>
      <TodoForm />
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
