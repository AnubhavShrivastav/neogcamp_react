import { useState } from 'react'
import './App.css'

function App() {

const [userInput, setInput] = useState('')

 function inputHandler(event){
  console.log(event.target.value)
  setInput(event.target.value)
 }



  return (
    <>
     <h1>input outt!</h1>
       <input id='input' onChange={inputHandler} type="text" />
      <h2>welcome {userInput}</h2>

    </>
  )
}

export default App