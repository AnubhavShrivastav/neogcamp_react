// let color = "blue";
// let align = "center"; 
// let userName = prompt("enter your name : ")

function likeHandler(){
  console.log("liked")
}

function App(){
  return(
  //   <div className = "app">

  //  <h1 style = {{textAlign : align}}>welcome <span style={{color : color }}>{userName}</span> </h1> 

  <button onClick={likeHandler}>like</button>

  //  </div>


  )
}

export default App
