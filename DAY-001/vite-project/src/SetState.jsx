import React, { useState } from 'react'


export default function SetState() {
    const [color,setColor]=useState(false);
  return (
    <div className={`flex ${color? 'bg-red-500': 'bg-blue-500'} flex-col items-center justify-center flex-grow `}>
        <button onClick={()=>setColor(!color)} className='p-2 text-white bg-yellow-500 rounded-md'>Change Color</button>
    </div>
  )
}
