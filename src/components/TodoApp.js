import React from 'react';
import "./TodoApp.css";
import TodoContainer from './TodoContainer';

function TodoApp() {

  return (
    <section className="App">
      <h1>Hello Todo!</h1>
      <TodoContainer />
    </section>
  );
}

export default TodoApp;
