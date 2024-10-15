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

         return <li style={{padding: "1rem"}}>{item}</li>
       })
      } 
         </ul>
     </>
   )
 }


// function App(){

// let userName = "dev";
// let loggedIn = true;

// function getUserMessage(){
// if(loggedIn){
//   return userName;
// }else{
//   return " please Login";
// }
// }


//   return(
//     <>
//     <h1> welcome {getUserMessage()}</h1>
//     </>
//   )
// }

export default App
