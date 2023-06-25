import Header from './Components/Header/Header';
import Add from './Components/Add/Add';
import React, { useState } from 'react';
import TodoItem from './Components/Todoitem/TodoItem';
import SwipeableTemporaryDrawer from './Components/SwipeableTemporaryDrawer/SwipeableTemporaryDrawer';



function App() {
  
  const [todo, setTodo] = useState([
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
      <SwipeableTemporaryDrawer todo={todo} setTodo={setTodo} />
        <div className='body'>
          <Header todo={todo}/>
          {/* <Add todo={todo} setTodo={setTodo} /> */}
          <TodoItem todo={todo} setTodo={setTodo} />
        </div>
    </div>
  );
}

export default App;
