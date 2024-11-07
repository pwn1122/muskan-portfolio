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
        <p> Hello, I’m Sonu Dhillon, a graphic designer with a passion for creating meaningful designs that make a lasting impact <br />
        As a graphic designer, I strive to create designs that are not only visually appealing but also communicate a message effectively. <br />
        I have worked with clients from various sectors, such as fashion, food, and education.</p>

        
<div className={ store?"aboutme":"aboutno"}>
<p> My areas of expertise include logo design, print design, and web design.
          ranging from websites to Web-Apps
          I take pride in my ability to deliver projects on time and on budget, while maintaining the highest standards of quality.</p></div>
<span onClick={text}>{read}</span>
      </div>
      <div className="mainimg">
      <img src="/logo.jpeg" alt="" />
      </div>
    </div>
  )
}

export default About
