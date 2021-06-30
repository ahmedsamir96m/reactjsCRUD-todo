import React, {useState} from 'react';
import TodoContainer from './TodoContainer';
import TodoItem from './TodoItem';

function TodoApp() {
  const [todos, setTodos] = useState([{
    todoTitle: "Todo Title",
    todoBody: "Todo Body",
    id: null,
    isComplete: false
  }])

  return (
    <section className="App">
      <h1>Hello Todo!</h1>
      <TodoContainer />
      <div className="todo__container">
        <ul>
        {todos.map(todo => {
          return <li key={todo.id}>
            <TodoItem todo={todo}/>
          </li>
        })}
        </ul>
      </div>
    </section>
  );
}

export default TodoApp;
