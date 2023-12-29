import React, { useState } from 'react'


export default function SetState() {
    const [color,setColor]=useState('red-500');
    const handleChange=()=>{
        color==='red-500'?setColor('blue-700'):setColor('red-500');
    }
  return (
    <div className={`flex bg-${color} flex-col items-center justify-center flex-grow `}>
        <button onClick={()=>handleChange()} className='p-2 text-white bg-yellow-500 rounded-md'>Change Color</button>
    </div>
  )
}
