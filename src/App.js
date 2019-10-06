import React from 'react';
import TodoItem from "./TodoItem"
import todosData from "./todosData"


function App(){
  const todosItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todosItems}
    </div>
  )
}


export default App
