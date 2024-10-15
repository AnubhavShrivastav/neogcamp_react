import './App.css'

 function App() {

  let shoppingList = ["orange","apple","Eggs","rice","bread","candle","potato","jackFruits"];

  function getbg(index){  
   if (index % 2 == 0 ){
    return "white";
   }else{
    return "grey" ;
   }
  }

  function listHandler(item){
   console.log("clicked",item)
  }

   return (
     <>
       <h1>shopping list</h1>

    <ul>
      {
        shoppingList.map((item,index) => {
         return  <li onClick = {() => listHandler(item)} style={{backgroundColor: getbg(index), padding: "1rem"}}>{item}</li>
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
