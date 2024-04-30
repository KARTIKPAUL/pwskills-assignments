import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import PictureList from './Components/PictureList/PictureList'
import CustomRoutes from './Routes/CustomRoutes'
import { Router } from 'react-router-dom'
function App() {

  return (
      <div>
      <CustomRoutes />
    </div>
  )
}

export default App
