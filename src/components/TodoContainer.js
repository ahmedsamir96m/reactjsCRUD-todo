import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem';


function TodoContainer() {
  const [todos, setTodos] = useState([])

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
    
    event.target.querySelector('input#todo__title').value = ""
    event.target.querySelector('textarea#todo__body').value = ""
  }

  const deleteTodo = (id) => {
    let newTodos = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos([...newTodos])
  }

  return (
    <div>
      <TodoForm addTodoToTodos={addTodoToTodos} />
      <div className="todo__container">
        <ul>
        {todos.map(todo => {
          return <li key={todo.id}>
            <TodoItem todo={todo} deleteTodo={deleteTodo}/>
          </li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default TodoContainer
