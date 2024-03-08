import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singers'
import BookStore from './BookStore'
function App() {

  const books = [
    {id:1,name:'Physics',price:100},
    {id:2,name:'Math',price:200},
    {id:3,name:'Chemistry',price:400},
    {id:4,name:'Biology',price:900},
  
  ]

  const actors = ['Sakib','Shoriful Raj','Jasim','Rubel']
       const singers= [
       {id:1 ,name:'Dr. Mahfuzur Rahman', age:88},
       {id:2 ,name:'Eva Rahman', age:38},
       {id:3 ,name:'Shuvro devnath', age:58},
       {id:4 ,name:'Pritom', age:28}
       ]
  return (
    <>

      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
       {
        singers.map(singer => <Singer singer={singer}></Singer>)
       }

      <Actor name={"Bappa raz"}></Actor>
  

     {
      actors.map(actor =><Actor name={actor}></Actor>)
     }
     {/* <Todo task="Learn React" isDone={true}></Todo>
     <Todo task="explore core concepts" isDone={false}></Todo>
     <Todo task="try JSX" isDone={true}></Todo> 
       <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="5"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
  
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}

    </>
  )
}
function Device(props){
  // console.log(props)
  return <h2>This Device:{props.name} price:{props.price}k </h2>
}
function Person(){
  
  const person = {name:'Salim',age:23}
   return <h3>I am a {person.name} age {person.age}</h3>
}
function Student({grade=-1,score=0}) {
  console.log(grade,score);
return (
<div className="student">
  <h3>This is a student </h3>
  <p>Class:{grade}</p>
  <p>Score : {score}</p>
</div>
)
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding:'20px',
    border:'2px solid purple'

  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding</p>
    </div>
  )
}
export default App
