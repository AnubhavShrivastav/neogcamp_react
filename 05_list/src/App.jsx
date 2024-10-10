import './App.css'

function App() {

 let shoppingList = ["orange","apple","Eggs","rice","bread","candle","potato","jackFruits"];


  return (
    <>
      <h1>shopping list</h1>
     <ul>
     {
      shoppingList.map(i => {
        return <li>{i}</li>
      })
     } 
        </ul>
    </>
  )
}

export default App
