import React from 'react'
import { useState } from 'react'
import Header from './Header';

const Todolist = () => {

    const [todo,settodo] = useState([]);

    const addtodo = (newtodo) =>{
        settodo([...todo,newtodo])
    }

  return (
    <div>
        <Header addtodo ={addtodo}/>
        <ul>
        <li>{todo}</li>
        </ul>
      
    </div>
  )
}

export default Todolist

