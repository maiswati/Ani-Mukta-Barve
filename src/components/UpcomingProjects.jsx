import React from 'react'
import asambhav from '../assets/asambhav.png'
import ravsaheb from '../assets/raavsaheb.webp'
const UpcomingProjects = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:"#1C1B1B", minHeight: "100vh"}}>
          <div className="row m-5">
            <h1 className='cinzel text-center text-light mb-5 mt-4' style={{textDecoration:"underline"}} >Upcoming Projects</h1>
            <div className='d-flex gap-5 flex-wrap'>
<div className='border border-3 borderColor p-4 text-center' style={{width:"300px"}}>
                <img src={asambhav} alt="asambhav" className='img-fluid mb-3' />
                <h1 className='space-mono-regular asambhav'>Asambhav</h1>
                <p className='space-mono-regular asambhav'>Release Date : 21 Nov 2025</p>
                <button className='btn space-mono-regular' style={{ backgroundColor: "#F7DAC0" }}>Show Details</button>
            </div>
            <div className='border border-3 borderColor p-4 text-center' style={{width:"300px"}}>
                <img src={ravsaheb} alt="ravsaheb" className='img-fluid mb-3' />
                <h1 className='space-mono-regular asambhav'>Raavsaaheb</h1>
                <p className='space-mono-regular asambhav'>Release Date : Unknown</p>
                <button className='btn space-mono-regular' style={{ backgroundColor: "#F7DAC0" }}>Show Details</button>
            </div>
            </div>
            
          </div>
        </div>
  )
}

export default UpcomingProjects
