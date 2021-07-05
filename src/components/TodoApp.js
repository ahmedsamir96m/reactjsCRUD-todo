import React from 'react';
import "./TodoApp.css";
import TodoContainer from './TodoContainer';
import TodoFooter from './TodoFooter';

function TodoApp() {

  return (
    <section className="App">
      <h1>Check what you have to do today!</h1>
      <TodoContainer />
      <TodoFooter devLinkdin="https://www.linkedin.com/in/ahmedsamir96m/"/>
    </section>
  );
}

export default TodoApp;
