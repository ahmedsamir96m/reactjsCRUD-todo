import React from 'react';
import "./TodoApp.css";
import TodoContainer from './TodoContainer';

function TodoApp() {

  return (
    <section className="App">
      <h1>Check what you have to do today!</h1>
      <TodoContainer />
    </section>
  );
}

export default TodoApp;
