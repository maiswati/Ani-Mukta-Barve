import React from 'react'
import showReel from '../assets/public/video/mukta show reel.mp4'
import '../index.css'
const ShowReel = () => {
  return (
    <div className='container-fluid p-5 showreel-section' >
        <div>
            <h1 className='cinzel text-light'>Mukta Barve Show Reel</h1>
            <video className='img-fluid w-100 video-wrapper' autoPlay loop>
                <source src={showReel} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default ShowReel
