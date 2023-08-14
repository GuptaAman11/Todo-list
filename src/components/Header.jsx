import React from 'react'
import { useState } from 'react'

const Header = ({addtodo}) => {


    const HandleOnClick = ()=>{
        addtodo(data);
        

    }

    const HandleOnChange = (event)=>{
        setdata(event.target.value);
        
    }



    const [data , setdata] = useState("")
    
  return (
    <div>
      <div>
        <h1>To-Do List</h1>
        <input type='text' onChange={HandleOnChange}  placeholder='enetr the data'/>
        <button onClick={HandleOnClick}>Add</button>
      </div>
    </div>
  )
}

export default Header

