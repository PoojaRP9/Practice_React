import { useState } from 'react'

import './App.css'

function App() {
  
  let[counter,setCounter] = useState(15)

  // let counter = 15

  const addValue=() => {

    if(counter<20){
    console.log("value added",counter);
    counter=counter+1
    setCounter(counter)
    }else{
      console.log("no more")
    }

  }

  const decreaseValue=()=>{
    if(counter>0){
    counter=counter-1
    setCounter(counter)
    }else{
      console.log("beyond range")
    }
  }

  return (
    <>
    <h1>HOOK</h1>
    <h3>Counter Value: {counter}</h3>

    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={decreaseValue}>decrease value</button>
    </>
  )
}

export default App
