import { useState } from 'react'
import './App.css'
import NavBar from './components/header/NavBar'
import './components/header/NavBar.css'
import Home from './components/HomePage/Home'
import './components/HomePage/Home.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home/>
    </>
  )
}

export default App
