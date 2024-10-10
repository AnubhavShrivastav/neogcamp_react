import { useState } from 'react'
import './App.css'

function App() {

  const emojiDictionary = {
  
    "😀": "grin",
    "😁": "beam",
    "😂": "joy",
    "😊": "smile",
    "😎": "cool",
    "😉": "wink",
    "😍": "love",
    "😇": "angel",
    "😏": "smirk",
    "😜": "playful"
};

const [meaning , setMeaning] = useState('')

function inputHandler(event){

  let input = event.target.value 
 let meaning = emojiDictionary[input]

 if(meaning === undefined){
 meaning = "we don't have this in our database."
 setMeaning(meaning)
 }

  setMeaning(meaning)
}


  return (
    <>
    <h1>inside outt!</h1>
    <input id = "input"  onChange = {inputHandler} />  
    <h2>{meaning}</h2>

   
    </>
  )
}

export default App
