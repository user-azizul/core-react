import React, { useState } from 'react'

function AccordionAlt() {
    // Accordion component goes here
    const data = [
        {id:1,
            title: 'Section 1',
            content: 'Section 1 Content',
           
        },
        {id:2,
            title: 'Section 2',
            content: 'Section 2 Content',
           
        },
        {id:3,
            title: 'Section 3',
            content: 'Section 3 Content',
           
        },
    ]
const [select,setSelect]= useState([0])
const [multiple,setMultiple]= useState(false)
function handleClick(id){
    if(multiple){
        console.log(id)
        setSelect(prev=>prev.includes(id)? prev.filter(item=>item !== id):[...prev,id])
    }else{
        console.log(id)
      
        setSelect(prev=>{
            console.log(prev);
            
           return prev.includes(id)?[]: [id]})
    }
}

function toggleMulti(){
    setMultiple(!multiple)
}

  return (
    <div className='accordion'>
        {data.map((item,id)=>(
            <li key={item.id}>
                <div className="title">
                <button onClick={()=>handleClick(id)}>{item.title}</button>
                <span>{select.includes(id)?"-":'+'}</span>
                </div>
                <div className="content">
                    {select.includes(id) && <p>{item.content}</p>}
                </div>
                
            </li>
        ))}
    </div>
  )
}

export default AccordionAlt