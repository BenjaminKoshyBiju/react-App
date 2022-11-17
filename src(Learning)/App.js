
import './App.css';
import { useState,useEffect } from 'react';



const App= ()=> {
 const [count,setcount]=useState(0)
 useEffect(()=>{alert("This is number"+count)},[count])
  return (
    <div className="App">
      <button onClick={()=>setcount((addCount)=>addCount+1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>setcount((prevCount)=>prevCount-1)}>-</button>
     
     {/* 
     with the help of conditions like this we can make user login sessions and so muchg more can be done!
  const name="Benjamin"
  const Login=false
      {Login?
      (
        <h2>Welcome {name}!</h2>
      ):
      (
        <>
        <h2>Please Log in</h2>
        <h1>eroor code 0!</h1>
        
      
        </>
      )}
      
      
      Props

      const Details=(props)=> {
 
  return(
<>
  <h1>Name:{props.name}</h1>
  <h1>Age:{props.age}</h1>
  <h1>Course:{props.cs}</h1>
  </>
  )
}

       <Details name={"Joshua"} age={12} cs={"BE"}/>
      <Details name={"lamba"} age={21} cs={"BCA"}/>
      <Details name={"Benjamin"} age={24} cs={"MCA"}/>
      
      */}
    </div>
  );
}

export default App;
