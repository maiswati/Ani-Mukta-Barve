import React from 'react'
import asambhav from '../assets/asambhav.png'
import ravsaheb from '../assets/raavsaheb.webp'
import mpm4 from '../assets/mpmm4.jpeg'
import maya2 from '../assets/mayamuk.jpeg'

const UpcomingProjects = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:"#1C1B1B", minHeight: "100vh"}}>
          <div className="row m-5">
            <h1 className='cinzel text-center text-light mb-5 mt-4' style={{textDecoration:"underline"}} >Upcoming Projects</h1>
            <div className='d-flex gap-5 flex-wrap'>
              <div className='border border-3 borderColor p-4 text-center' style={{width:"300px"}}>
                <img src={maya2} alt="mpm4" className='img-fluid mb-3' />
                <h1 className='space-mono-regular asambhav'>Maya</h1>
                <p className='space-mono-regular asambhav'>Release Date : 27th Feb 2026</p>
                <button className='btn space-mono-regular' style={{ backgroundColor: "#F7DAC0" }}>Show Details</button>
            </div>
               <div className='border border-3 borderColor p-4 text-center' style={{width:"300px"}}>
                <img src={mpm4} alt="mpm4" className='img-fluid mb-3' />
                <h1 className='space-mono-regular asambhav'>Mumbai Pune Mumbai 4</h1>
                <p className='space-mono-regular asambhav'>Release Date : 2027</p>
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
