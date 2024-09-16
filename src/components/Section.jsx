import React from 'react'
import { Link } from 'react-router-dom'

function Section() {
  return (
    <div>
      <div className='section'>
  <h2>Dhananjay Monga<span> Frontend Developer</span></h2>
  <a href="https://drive.google.com/file/d/182D6oEkTwEnDkI6US2tcGmvQ89w8Mbw6/view?usp=drivesdk">Read the cv</a>
  <div  className='sectionicons'>
  <Link to={"https://github.com/dhananjaymonga"}>
  <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/FFFFFF/github.png" alt="github"/>
  </Link>
  <Link to={"https://www.linkedin.com/in/dhananjay-monga-2619342a4"}>
  <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/linkedin--v1.png" alt="linkedin--v1"/>
  </Link>
  <Link to={"https://x.com/MongaDhananjay?t=iNZkiMSmRjSMlCIt5UGcTA&s=09"}>
  <img  width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/x.png" alt="x"/>
  </Link>

  </div>
</div>
    </div>
  )
}

export default Section
