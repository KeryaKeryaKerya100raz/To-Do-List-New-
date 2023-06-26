import React from 'react'
import SwipeableTemporaryDrawer from '../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer'


function Header({todos}) {
  return (
    
    <h1>To Do List ({Object.keys(todos).length})</h1>
  )
}

export default Header