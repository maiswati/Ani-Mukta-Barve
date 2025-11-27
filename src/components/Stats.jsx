import React from 'react'
import movie from '../assets/movie.png';
import tv from '../assets/tv.png'
import theatre from '../assets/theatre.png';
import CountUp from 'react-countup';
const Stats = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:"#FEFBF8", minHeight: "100vh"}}>
          <div className="row m-5">
            <h1 className='cinzel text-center mb-5 mt-4' style={{textDecoration:"underline"}} >Stats</h1>
            <div className="col-lg-4 text-center mb-4">
                <img src={movie} alt="movie" className='img-fluid mb-4' style={{width:"100px"}}/>
                <div>
                    <h1 className='space-mono-bold'>
                        <CountUp end={43} duration={4}/> +
                    </h1>
                    <h3 className='space-mono-bold'>Films</h3>
                </div>
            </div>
            <div className="col-lg-4 text-center mb-4 ">
                <img src={tv} alt="movie" className='img-fluid mb-4' style={{width:"75px"}}/>
                <div>
                    <h1 className='space-mono-bold'>
                        <CountUp end={20} duration={4}/> +
                    </h1>
                    <h3 className='space-mono-bold'>TV Shows</h3>
                </div>
            </div>
            <div className="col-lg-4 text-center mt-4">
                <img src={theatre} alt="movie" className='img-fluid mb-4' style={{width:"110px"}}/>
                <div>
                    <h1 className='space-mono-bold'>
                        <CountUp end={17} duration={4}/> +
                    </h1>
                    <h3 className='space-mono-bold'>Plays</h3>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Stats
