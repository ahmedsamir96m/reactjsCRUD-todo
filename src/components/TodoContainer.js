import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem';


function TodoContainer() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = localStorage.getItem("stored-todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos))
  }, []);
  
  useEffect(() => {
    localStorage.setItem("stored-todos", JSON.stringify(todos))
  });

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

  const editTodo = (id) => {
    let editedTitle = prompt("Edit Title!");
    let editedBody = prompt("Edit Body!");

    let newTodos = todos.filter(todo => {
      if (todo.id === id) {
        /\S/.test(editedTitle)? todo.todoTitle = editedTitle : editedTitle = todo.todoTitle;
        /\S/.test(editedBody)? todo.todoBody = editedBody : editedBody = todo.todoBody;
        todo.todoTitle = editedTitle
        todo.todoBody = editedBody
        todo.id = id
      }
      return todo;
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
            <TodoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
          </li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default TodoContainer
