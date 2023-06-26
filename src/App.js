import Header from './Components/Header/Header';
import React, { useState } from 'react';
import TodoItem from './Components/Todoitem/TodoItem';
import SwipeableTemporaryDrawer from './Components/SwipeableTemporaryDrawer/SwipeableTemporaryDrawer';



function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'eref',
      status: true,
      date: 222
    },
    {
      id: 2,
      title: 'dfdfdfs',
      status: true,
      date: 222
    },
    {
      id: 3,
      title: 'sfdfsd',
      status: true,
      date: 222
    },

  ])
  
  
  return (
    <div className='All'>
      <SwipeableTemporaryDrawer todos={todos} setTodos={setTodos} />
        <div className='body'>
          <Header todos={todos}/>
          <TodoItem todos={todos} setTodo={setTodos} />
        </div>
    </div>
  );
}

export default App;
