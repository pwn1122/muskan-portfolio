import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Section from './components/Section'
import Project from './components/Project'
import Contact from './components/Contact'
import Blog from './components/Blog'
function App() {
  return (
    <div>
       <Navbar/>
      <Section/>
      <About/>
      <Project/>
      <Contact/> 
      {/* <Blog/> */}
      
    </div>
  )
}

export default App
