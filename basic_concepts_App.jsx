import { useState } from 'react'
import './App.css'
import {Login,Rendering_Lists_Map} from './Practice'
import {Form_creation} from './form.jsx'

function Header(){
  return <h1>Welcome to To home page</h1>
}
function ProductCard(){
  return(
    <div>
     <h2>Name : Laptop</h2>
     <h3>Price: 1000</h3>
     <h2>Hello what are you doing ?</h2>
    </div>
  )
}

function Counter(){
  const[count ,setCount] = useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

function Student(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <h3>Gender: {props.gender}</h3>
    </div>
  )

}


const name="Siddhi";
function App() {
// function handleChange(event){
//   console.log(event.target);
// }

// function handleSubmit(event){
//   event.preventDefault();
//   console.log("Form Submitted");
// }


const isAdmin =true;

  return (
    <>
    
    <Rendering_Lists_Map />
    <Login />
    <Form_creation />
    <h1>Welcome to the Home Page</h1>
    {isAdmin && <button>Delete User</button>}
    {/* <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button  >
    </form> */}
    {/* <input onChange={handleChange}/>; */}

      <Header />
     <h1>Hello React</h1>
     <p>My first react app</p>
     
     <h2>my name is {name}</h2>

     Product Details:
     <ProductCard />

    <Student name="Sanika" age="20" gender="Female"/>

    <Counter />

    {/* <Button onClick={HandleClick}>Click Me</Button> */}
    </>
  )
}




export default App
