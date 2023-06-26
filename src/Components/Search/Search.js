import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import './Search.css'

function Search({todos}) {
    const [value2, setValue2] = useState('')
    const searchTodo = todos.filter(item => {
        return item.title.toLowerCase().includes(value2.toLocaleLowerCase())
    })

    return (
    <form>
        <input onChange={(event) => setValue2(event.target.value)} />
       { searchTodo.map( item => {
            return (
                <Paper elevation={3}>
                    <div key={item.id}  className='itemsSearch'>{item.title}</div>
                </Paper>
            )
        })
    }
    </form>
  )
}

export default Search