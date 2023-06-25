import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function Add({todo, setTodo}) {
  
    const [value, setValue] = useState("")
    const date = new Date().toLocaleTimeString();
    
    function addTodo(event) {
        event.preventDefault()
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true,
                date: date
            }]
        )
        setValue('')
    }
  
    return (
    <div>
 <div className='new-zadacha'>
            <form >
                <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div  className='formAdd'>
                        <div className='formInput'><TextField
                            id="outlined-multiline-static"
                            label="Новая задача"
                            multiline
                            rows={4}
                            placeholder='Задача' value={value} onChange={ (e)=> setValue(e.target.value)}
                        />
                        </div>
                        <div className='buttonAdd'><Fab color="primary" aria-label="add" size='small' type='submit' className='submit' onClick={addTodo} >
                                <AddIcon />
                             </Fab>
                        </div>
                    </div>
                </Box>
                
                
            </form>
        </div>
    </div>
  )
}

export default Add

