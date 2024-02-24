import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter]  = useState(5);

const addValue=()=>{
  // counter = counter+1;
  setCounter(counter+1);
}
const descValue=()=>{
  if(counter > 0){
  // counter = counter-1;
  setCounter(counter-1);
  }else{
    alert("Counter is 0")
  }
}
  return (
    <>
       <h1>Chai or React</h1>
       <h2>Counter value :{counter}</h2>
       <button onClick={addValue} >Add Value</button>
       <br />
       <button onClick={descValue}>Desc Value</button>

       <p>footer : {counter}</p>
    </>
  )
}

export default App
