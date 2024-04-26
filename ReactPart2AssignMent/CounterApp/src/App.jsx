import { useState } from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0);
  return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='bg-red-500 p-10 rounded-lg shadow-lg'>
        <h1 className='text-center my-8 text-7xl text-white font-bold'>{count}</h1>
        <button className='border bg-gray-200 px-7 py-4 mx-5 my-10 rounded hover:bg-green-500 duration-300 hover:text-white' onClick={() =>  setCount((count) => count + 1)}>IncreMent</button>
        <button className='border bg-gray-200 px-7 py-4 my-10 rounded mx-5 hover:bg-green-500 duration-300 hover:text-white' onClick={() => setCount((count) => count -1)}>DecreMnet</button>
        </div>
      </div>
  )
}

export default App
