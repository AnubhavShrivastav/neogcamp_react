import { useState } from 'react'
import './App.css'

function App() {
  const [likeCounter, setLikeCounter] = useState(0)

  function likeHandler(){
   let newLike =  likeCounter+1
    setLikeCounter(newLike)
    console.log(newLike ," liked")
  }


  return (
    <>
    <h1>Like Counter</h1>

    <h4>{likeCounter}</h4>
   <button onClick={likeHandler}>like Me</button>

    
    </>
  )
}

export default App
