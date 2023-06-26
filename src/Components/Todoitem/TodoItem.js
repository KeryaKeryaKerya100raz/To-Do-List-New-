import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../Todoitem/Todoitem.css'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';


function TodoItem({ todos, setTodos }) {
    
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtred, setFiltred] = useState([...todos])
    const [tab, setTab] = useState('all')
    useEffect(filterTodo, [todos, tab])

    
     function deleteTodo(id) {
         let newTodos = [...todos].filter(item => item.id != id)
         setTodos(newTodos)
     }
   
     function editTodo(id, title){
         setEdit(id)
         setValue(title)
     }
 
     function uraTodo(id){
         let newTodos = [...todos].map(item => {
             if(item.id == id) {
                 item.status = !item.status
             }
             return item
         })
         setTodos(newTodos)
     }
 
     function saveTodo(id) {
         let newTodos = [...todos].map( item => {
             if (item.id == id ) {
             item.title = value
             }
             return item
         })
             setTodos(newTodos)
             setEdit(null)
     }
 
     function filterTodo() {
         let newTodos = []
         if(tab === 'all') {
             console.log(todos, 'todo')
             setFiltred([...todos])
         } else if (tab === 'active') {
             newTodos = todos.filter(item => item.status)
             setFiltred(newTodos)
         } else {
             newTodos = todos.filter(item => !item.status)
             setFiltred(newTodos)
         }
     }
 
  
    return (
        <div>
        <div className='filter'>
        <ButtonGroup className='buttonFilter' variant="text" aria-label="text button group">
            <Button onClick={() => setTab('all')} >Все </Button>
            <Button onClick={() => setTab('active')} >Текущие</Button>
            <Button onClick={() => setTab('done')} >Выполненные</Button>
        </ButtonGroup>
        </div>
        <div className='Items'>
        {
            filtred.map( item => (
                <div key={item.id + item.status.toString()}>
                    {
                        edit == item.id ? 
                            <div> 
                                <TextField
                                    id="standard-multiline-static"
                                    label="Редактирование"
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                    variant="standard"
                                    onChange={(e) => setValue(e.target.value)} value={value} 
                                />
                                
                            </div>
                                :
                            <Paper elevation={3} className='items'>
                                {
                                    item.status ? <p className='paper' >{item.title}</p> :
                                    <p className='paper off' >{item.title}</p>
                                }
                                
                                <div
                                    className="date"
                                    >Добавлено: { item.date }
                                 </div>
                                 <div  className='bg'>
                                 <ButtonGroup size='small' variant="text" aria-label="text button group">
                                    <Button onClick={ ()=>deleteTodo(item.id) }><DeleteIcon /></Button>
                                    <Button onClick={ ()=>editTodo(item.id, item.title)}><EditIcon /></Button>
                                    {
                                    item.status ? <Button onClick={ ()=>uraTodo(item.id)}>Завершить</Button> :
                                    <Button onClick={ ()=>uraTodo(item.id)}>Возобновить</Button>
                                }
                                    
                                </ButtonGroup>
                                </div>
                            </Paper>
                    }

                    {
                        edit == item.id ?
                            <div>
                                <Button size='small' variant="contained" endIcon={<SendIcon />} onClick={() => saveTodo(item.id)} >
                                    Готово
                                </Button>
                            </div>
                            :
                            <div>
                                
                                
                            </div>
                    }
                   
                    
                </div>
            ))
        }

        
        </div>
    </div>
  )
}

export default TodoItem