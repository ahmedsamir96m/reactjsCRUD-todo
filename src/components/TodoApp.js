import React from 'react';
import "./TodoApp.css";
import TodoContainer from './TodoContainer';
import TodoFooter from './TodoFooter';

function TodoApp() {

  return (
    <section className="App">
      <TodoContainer />
      <TodoFooter devLinkdin="https://www.linkedin.com/in/ahmedsamir96m/"/>
    </section>
  );
}

export default TodoApp;
