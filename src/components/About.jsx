import React from 'react'
import aboutImage from '../assets/about-section-image.png'
import sign from '../assets/sign.png'
const About = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:"#FEFBF8", minHeight: "100vh"}}>
      <div className="row m-5">
        <h1 className='cinzel text-center mb-5 mt-4' style={{textDecoration:"underline"}} >About</h1>
        <div className="col-lg-5 mb-5">
            <img className='img-fluid rounded' src={aboutImage} alt="Mukta Tai" />
        </div>
        <div className="col-lg-7 mt-3 text-center">
            <h5 className='text-center space-mono-regular'>
                Mukta Barve is an Indian film, television, and theatre actress and a producer. One of the most popular Marathi celebrities, she has established a career in Marathi films. She is a recipient of seven Maharashtra State Film Awards one for Best Debut and other six for Best Actress in different plays and films.
            </h5>
            <br />
            <h5 className='space-mono-regular text-center mb-5'>
                Recently in 60-61th Maharashtra State Marathi Cinema Awards she has been honored with one of the prestigious award <br /><br /> <b>चित्रपती कै. व्ही शांताराम विशेष योगदान पुरस्कार 2024.</b> 
            </h5>
            <img src={sign} alt="sign" className='img-fluid mt-5 border border-3 border-dark rounded'/>
        </div>
      </div>
    </div>
  )
}

export default About
