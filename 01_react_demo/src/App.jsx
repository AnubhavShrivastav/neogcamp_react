let color = "blue";
let align = "center"; 
let userName = prompt("enter your name : ")

function App() {
  return (
    <div className = "app">

   <h1 style = {{textAlign : align}}>welcome <span style={{color : color }}>{userName}</span> </h1> 
   </div>
  )
}

export default App
