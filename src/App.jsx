import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Section from './components/Section'
import Project from './components/Project'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Skills from './components/Skills'
function App() {
  return (
    <div>
       <Navbar/>
      <Section/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/> 
      {/* <Blog/> */}
      
    </div>
  )
}

export default App
