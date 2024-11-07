import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'


function Project() {
    let js = [
        {
          img: "/img/bhaidooj.jpg",
          tittle: "Bhai Dooj",
        },
        {
          img: "/img/diwali.jpg",
          tittle: "Happy Diwali",
        },
        {
          img: "/img/dhanteras.jpg",
          tittle: "Happy Dhanteras",
      
        },
        {
          img: "/img/vishavkarma.jpg",
          tittle: "Vishwakarma Day",
        },
        {
          img: "/img/flying.jpg",
          tittle: "Flying Diamonds",
        },
        {
          img: "/img/gym.jpg",
          tittle: "Fitness Gym",
        },
        {
          img: "/img/mithapan.jpg",
          tittle: "Special Mithapan",
        },
        {
          img: "/img/paneer.jpg",
          tittle: "Special ShahiPaneer",
        },
        {
          img: "/img/digital.jpg",
          tittle: "Digital Marketing Course",
        },
        {
          img: "/img/music.jpg",
          tittle: "Listen To Music",
        },
        {
          img: "/img/dushera.jpg",
          tittle: "Shubh Dussehra",
        },
        {
          img: "/img/tshirt.jpg",
          tittle: "New Arrival T-Shirt",
        },
        {
          img: "/img/nails.jpg",
          tittle: "Nails By Manreet",
        },
        {
          img: "/img/navratra.jpg",
          tittle: "Happy Navratri",
        },
        {
          img: "/img/juice.jpg",
          tittle: "Orange Fresh Juice",
        },
        {
          img: "/img/fresh.jpg",
          tittle: "Fresh Juice",
        },
        {
          img: "/img/gandhi.jpg",
          tittle: "Gandhi Jayanti",
        },
        {
          img: "/img/makup.jpg",
          tittle: "Nails By Diwanshu",
        },
        {
          img: "/img/rebull.jpg",
          tittle: "Red Bull",
        },
        {
          img: "/img/lipton.jpg",
          tittle: "Lipton Drink",
        },
        {
          img: "/img/fanta.jpg",
          tittle: "Fanta Drink",
        },
        {
          img: "/img/burger.jpg",
          tittle: "Hot Spicy Burger",
        },
      ];
      let react = [
        {
           img: "/img/rings.jpg",
          tittle: "Ring Puffs",
          link : "https://www.pacdora.com/share?filter_url=ps0beussei"
        },
        {
           img: "/img/kitkat.jpg",
          tittle: "Kitkat Choclate",
          link : "https://www.pacdora.com/share?filter_url=psul0tduwn"
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
                <li id='js'>All</li>
                <li id="react">3D</li>

            </div>
            <div className='projectimage'>
        {
data.map(val=>{
    return(
<div key={Math.random()}  className='setbox'>
  <Link to = {val.link}>
 
    <img src={val.img}></img>
    <h2>{val.tittle}</h2>
    <h4>{val.des}</h4>
    </Link>

</div>

        )
    })
}
</div>
    
    </div>
  )
}

export default Project
