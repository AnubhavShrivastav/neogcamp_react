import './App.css'

function App() {

 let shoppingList = ["orange","apple","Eggs","rice","bread","candle","potato","jackFruits"];


  return (
    <>
      <h1>shopping list</h1>
     <ul>
     {
      shoppingList.map((item,index) => {

       if(index % 2 != 0 ){
       return <li id='odd' >{item}</li>
       }

        return <li>{item}</li>
      })
     } 
        </ul>
    </>
  )
}

export default App
