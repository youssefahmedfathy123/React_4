import { useState } from 'react';
import {People} from './File'
import Bb from './Bb';
function App() {
  const [value,setValue] = useState(0)
  const [state,setstate] = useState(People.filter(x=>x.name == 'Youssef'))
  const [category,setCategory] = useState(
    [...new Set(People.map(x=>x.name))]
  )

const fun = (element,dor) =>{
let  y = People.filter(x => x.name == element)
  setValue(dor)  
  setstate(y)
}

  return (
<>
<h1 className='m-3 bg-success p-5 text-light text-center'>Our Geusts</h1>
<Bb category ={category} fun ={fun} value={value}/>
<div className='bg-warning rounded'>
   { 
    state.map(x=>
    <div key={x.id} className='bg-earning text-light m-3 p-3 text-center'>
    <h3>{x.name}</h3>
    <p>{x.parag}</p>
    </div> )}
  </div>
</> 
 )

}

export default App;

