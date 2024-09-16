import React, { useState } from 'react'

function About() {
  let [store,setstore]=useState(false)
  let [read,setread]=useState("Read More")
  function text(){
    setstore(!store)
    if(store==false){      
      setread("Hide it PLease ")
      return
    }
    if(store==true){
      setread('Read More')
    }

  }
  return (
    <div className='about' id='about'>
      <div className='main'>
        <h2>About</h2>
        <p>Hi, I am Dhananjay. Currently a student of  Jan Nayak Choudhary Devi Lal Vidyapeeth Sirsa doing B.TECH in Computer Engineering Great interest in technical things and enjoy to solve tech problems and looking forward to convert that interest to my carrer</p>

        
<div className={ store?"aboutme":"aboutno"}>
<p> I’m  Frontend developer - self-taught. Eager to explore the nature, my open mind and the new technologies. I consider myself to be a fast learner, able to grasp new concepts quickly with excellent capacity to remember new information.
        My tech stack in short includes: JavaScript, React Tailwind, CSS.</p></div>
<span onClick={text}>{read}</span>
      </div>
      <div className="mainimg">
      <img src="/logos.jpeg" alt="" />
      </div>
    </div>
  )
}

export default About
