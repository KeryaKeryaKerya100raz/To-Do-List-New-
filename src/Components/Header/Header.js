import React from 'react'
import SwipeableTemporaryDrawer from '../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer'


function Header({todo}) {
  return (
    
    <h1>To Do List ({Object.keys(todo).length})</h1>
  )
}

export default Header