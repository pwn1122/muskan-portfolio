import React from 'react'
import { Link } from 'react-router-dom'

function Section() {
  return (
    <div>
      <div className='section'>
  <h2>Sonu Dhillon<span> Graphic Designer</span></h2>
  <div  className='sectionicons'>
  <Link to={"https://www.instagram.com/design_dynamo_00?igsh=cDczZXdiamxzenhz"}>
  <img width="60" height="60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX91rfGtggSDFm-x1VS3GdRLSntDDwO0mxQ&s" alt="github"/>
  </Link>

  </div>
</div>
    </div>
  )
}

export default Section
