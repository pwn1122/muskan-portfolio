import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'


function Project() {
    let js = [
        {
          img: "/img/1.jpeg",
          tittle: "Memory Game",
          des: "The first player turns over 2 cards. If the pictures match, the player keeps the cards and tries again for another match.",
        },
        {
          img: "/img/2.jpeg",
          tittle: "Todo List",
          des: "The definition is a simple one.",
        },
        {
          img: "/img/3.jpeg",
          tittle: "Tic-Tac-Toe",
          des: " The game is played on a 3x3 grid and players take turns marking their X or O on a square of the grid.",
        },
        {
          img: "/img/4.jpeg",
          tittle: "Password Generator",
          des: "Password Generator is an app that quickly creates a randomized password based on the users parameters",
        },
      ];
      let react = [
        {
           img: "/img/1.jpeg",
          tittle: "Memory Game",
          des: "The first player turns over 2 cards. If the pictures match, the player keeps the cards and tries again for another match.",
        },
        {
           img: "/img/2.jpeg",
          tittle: "Todo List",
          des: "The definition is a simple one.",
        },
        {
           img: "/img/3.jpeg",
          tittle: "Tic-Tac-Toe",
          des: " The game is played on a 3x3 grid and players take turns marking their X or O on a square of the grid.",
        },
        {
          img: "/img/4.jpeg",
          tittle: "Password Generator",
          des: "Password Generator is an app that quickly creates a randomized password based on the users parameters",
        },
      ];
      let [data,setdata]=useState(js);
    function handleprojects(e){
        const id=e.target.id
console.log(id)
if(id=='js'){
    setdata(js)
    console.log(data)
}
if(id=='react'){
    setdata(react)
    console.log(data)
}
    }
  return (
    < div className='proj' id='proj' >
        
            <div className='projectlist' onClick={handleprojects}>
          <h1>Projects</h1>  
                <li id='js'>JS</li>
                <li id="react">React</li>

            </div>
            <div className='projectimage'>
        {
data.map(val=>{
    console.log(data)
    return(
<div key={Math.random()} className='setbox'>
    <img src={val.img}></img>
    <h2>{val.tittle}</h2>
    <h4>{val.des}</h4>

</div>

        )
    })
}
</div>
    
    </div>
  )
}

export default Project
