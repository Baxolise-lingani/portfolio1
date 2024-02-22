import { useState } from 'react'
import './App.css'
import NavBar from './components/header/NavBar'
import Home from './components/HomePage/Home'
import About from './components/AboutPage/About'
import Skills from './components/SkillsPage/Skills'
import Experience from './components/WorkExperience page/Experience'
import Portfolio from './components/PortfolioPage/Portfolio'
import Form from './components/FormPage/Form'
import Footer from './components/FooterPage/Footer'
import bakeryImage from './assets/images/bakery.jpg'
import bankAppImage from './assets/images/bank app.png'
import personalWebsiteImage from './assets/images/Personal website.jpg'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Form/>
      <Footer/>

    </>
  )
}

export default App
