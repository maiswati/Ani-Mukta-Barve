import React from 'react'
import movie from '../assets/movie.png';
import tv from '../assets/tv.png'
import theatre from '../assets/theatre.png';
import CountUp from 'react-countup';
import clap from '../assets/movieclap.png'
import tvshow from '../assets/tvshow.png'
import theatre2 from '../assets/theatremukta.png'
const Stats = () => {
  return (
    <section className="stats-section">
  <div className="container">
    <h2 className="stats-title cinzel">Stats</h2>

    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon">
            <img src={clap} height="150" width="200" style={{borderRadius:10}}/>
        </div>
        <div className="stat-number">
            <CountUp end={43} duration={4}/> +
        </div>
        <div className="stat-label">Films</div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
            <img src={tvshow} width="235" style={{borderRadius:10}}/>
        </div>
        <div className="stat-number">
            <CountUp end={20} duration={4}/> +
        </div>
        <div className="stat-label">TV Shows</div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
            <img src={theatre2} width="235" style={{borderRadius:10}}/>
        </div>
        <div className="stat-number">
            <CountUp end={17} duration={4}/> +
        </div>
        <div className="stat-label">Plays</div>
      </div>
    </div>
  </div>
</section>

  )
}



export default Stats
