import { useState } from 'react'
import Person from './Components/Person'
import './App.css'
import Button from './Components/Button'
import Header from './Components/Header'
import List from './Components/List'

function App() {
  const[color,setColor] = useState('white')

  const btnClick = () =>{
    const newColor = "green";
    document.body.style.backgroundColor = newColor;
  } 

  return (
   <>
    <Header title='This is Header'/>
    <Person name='Kaka' age='100'/>
    <List items='All The Mega City In India : '/>
    <Button text='Submit' onClick={btnClick}/>
  </>
  )
}

export default App
