import { useState } from 'react'
import './App.css'
import NavBar from './components/header/NavBar'
import './components/header/NavBar.css'
import Home from './components/HomePage/Home'
import './components/HomePage/Home.css'
import About from './components/AboutPage/About'
import './components/AboutPage/About.css'
import Skills from './components/SkillsPage/Skills'
import'./components/SkillsPage/Skills.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar/>
      <Home/>
      <About/> */}
      <Skills/>
      
    </>
  )
}

export default App
