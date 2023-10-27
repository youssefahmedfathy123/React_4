import { useState } from 'react'
import './App.css'
export default function Bb({category,fun,value}) {
  return (
    <div className="text-center ">
  {category.map((element,index) => 
    <button onClick={() => fun(element,index)}
     className={`mx-5 rounded p-2 ${index == value && 'active'}`}
      key={index}>
        {element}
    </button>
  )}
    </div>
  )
}

