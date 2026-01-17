import React from 'react'
import showReel from '../assets/public/video/mukta show reel.mp4'
import '../index.css'
const ShowReel = () => {
  return (
    <div className='container-fluid showreel-section' >
        <div className='p-5 h-100'>
            <h1 className='cinzel text-light mb-4'>Mukta Barve Show Reel</h1>
            <video className='img-fluid w-100 video-wrapper' autoPlay loop>
                <source src={showReel} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default ShowReel
