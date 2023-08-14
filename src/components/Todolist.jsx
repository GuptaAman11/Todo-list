import React from 'react'
import { useState } from 'react'
import Header from './Header';

const Todolist = () => {

    const [todo,settodo] = useState([]);

    const addtodo = (newtodo) =>{
        settodo([...todo,newtodo])
    } 
    const handleDelete = (index) => {
    const updatedTodo = todo.filter((i) => i !== index);
    settodo(updatedTodo);
  };

  const handleUpdate = (index, updatedTodo) => {
    const updatedList = todo.map((item, i) => (i === index ? updatedTodo : item));
    settodo(updatedList);
  };

  return (
    <div>
        <Header addtodo ={addtodo}/>
        <ul>
          {todo.map((item, index) => (
            <li key={index}>{item}
            <button onClick={handleUpdate(index, prompt('Enter updated todo:'))}>Update</button>
            <button onClick={ handleDelete(index)}>Delete</button></li> 
          ))}
        
        </ul>
      
    </div>
  )
}

export default Todolist

