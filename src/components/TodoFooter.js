import React from 'react'

function TodoFooter(props) {
  const {devLinkdin} = props
  return (
    <footer className="todo__footer">
      <span>By: </span>
      <a href={devLinkdin}>Ahmed Samir</a>
    </footer>
  )
}

export default TodoFooter
