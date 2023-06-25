import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Add from '../Add/Add';
import '../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer.css'
import MenuIcon from '@mui/icons-material/Menu';
import Search from '../Search/Search';


function SwipeableTemporaryDrawer({todo, setTodo, value, setValue}) {
  const [state, setState] = React.useState({
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        <h2>Меню</h2>
        <h3>Добавить задачу</h3>
        <div className='add'><Add todo={todo} setTodo={setTodo} value={value} setValue={setValue} /></div>
      </List>
      <Divider />
      <List className='search'>
        <h3>Найти задачу</h3>
        <Search  todo={todo} setTodo={setTodo}/>
      </List>
    </Box>
  );

  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='buttonMenu'><Button onClick={toggleDrawer(anchor, true)}>{anchor}<MenuIcon /></Button></div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SwipeableTemporaryDrawer