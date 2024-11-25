import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'


function Project() {
    let js = [
        {
          img: "/img/canada.jpg",
          tittle: "The SkyLine",
        },
        {
          img: "/img/bridal.jpg",
          tittle: "Reema Dhukia Makeover",
        },
        {
          img: "/img/airlines.jpg",
          tittle: "Domestic Airlines",
        },
        {
          img: "/img/lipton.jpg",
          tittle: "Lipton Tea",
        },
        {
          img: "/img/sauce.jpg",
          tittle: "Full Of Sauce",
        },
        {
          img: "/img/dosa.jpg",
          tittle: "Anna South Indian Dausa",
        },
        {
          img: "/img/navratri.jpg",
          tittle: "Happy Navratri",
        },
        {
          img: "/img/diwali.jpg",
          tittle: "Happy Diwali",
        },
        {
          img: "/img/sneha.jpg",
          tittle: "Saneha Beauty Saloon",
      
        },
        {
          img: "/img/vishavkarma.jpg",
          tittle: "Vishwakarma Day",
        },
        {
          img: "/img/fashion.jpg",
          tittle: "Style Fashion",
        },
        {
          img: "/img/google.jpg",
          tittle: "Start Your Business",
        },
        {
          img: "/img/gandhi.jpg",
          tittle: "Happy Gandhi Jayanti",
        },
        {
          img: "/img/nails.jpg",
          tittle: "Fab Fingers",
        },
        {
          img: "/img/digital.jpg",
          tittle: "Digital Marketing Course",
        },
        // {
        //   img: "/img/music.jpg",
        //   tittle: "Listen To Music",
        // },
        // {
        //   img: "/img/dushera.jpg",
        //   tittle: "Shubh Dussehra",
        // },
        // {
        //   img: "/img/tshirt.jpg",
        //   tittle: "New Arrival T-Shirt",
        // },
        // {
        //   img: "/img/nails.jpg",
        //   tittle: "Nails By Manreet",
        // },
        // {
        //   img: "/img/navratra.jpg",
        //   tittle: "Happy Navratri",
        // },
        // {
        //   img: "/img/juice.jpg",
        //   tittle: "Orange Fresh Juice",
        // },
        // {
        //   img: "/img/fresh.jpg",
        //   tittle: "Fresh Juice",
        // },
        // {
        //   img: "/img/gandhi.jpg",
        //   tittle: "Gandhi Jayanti",
        // },
        // {
        //   img: "/img/makup.jpg",
        //   tittle: "Nails By Diwanshu",
        // },
        // {
        //   img: "/img/rebull.jpg",
        //   tittle: "Red Bull",
        // },
        // {
        //   img: "/img/lipton.jpg",
        //   tittle: "Lipton Drink",
        // },
        // {
        //   img: "/img/fanta.jpg",
        //   tittle: "Fanta Drink",
        // },
        // {
        //   img: "/img/burger.jpg",
        //   tittle: "Hot Spicy Burger",
        // },
      ];
      let react = [
        {
           img: "/img/chips.jpg",
          tittle: "Chips 3D Packing",
          link : "https://www.pacdora.com/share?filter_url=pser9llvxi"
        },
        {
           img: "/img/kurkure.jpg",
          tittle: "Kurkure 3D Packing",
          link : "https://www.pacdora.com/share?filter_url=psd8l6rqlo"
        },
        {
           img: "/img/meggie.jpg",
          tittle: "Meggie 3D Packing",
          link : "https://www.pacdora.com/share?filter_url=psxccy37ug"
        },
        {
           img: "/img/juice.jpg",
          tittle: "Tropicana 3D Packing",
          link : "https://www.pacdora.com/share?filter_url=pseuv5wh8d"
        },
        {
           img: "/img/fuck.jpg",
          tittle: "T-Shirt 3D",
          link : "https://www.pacdora.com/share?filter_url=ps5xh8p19e"
        },
        {
           img: "/img/fuck2.jpg",
          tittle: "T-Shirt 3D ",
          link : "https://www.pacdora.com/share?filter_url=ps7lgvjt3d"
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
