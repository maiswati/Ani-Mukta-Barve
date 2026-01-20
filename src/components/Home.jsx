import React from "react";
import mukta from "../assets/Mukta 2.jpg";
import mukta2 from '../assets/about-section-image.png'
import "../index.css";
import muktaTai from '../assets/muktaTai.jpeg'
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-center text-light"
      style={{
        backgroundImage: `url(${muktaTai})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></div>
      <div
  className="vignette-overlay"
  style={{
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
  }}
></div>
      <div style={{ zIndex: 2 }}>
        <h1 className="cinzel hero-animate hero-title" style={{fontWeight:700, color:"beige", fontSize:40, textShadow:"0 3px 6px rgba(0, 0, 0, 0.6), 0 12px 28px rgba(0,0,0,0.45)"}}>
          Mukta Barve
        </h1>
        <p className="cinzel hero-animate hero-subtitle" style={{color:"blanchedalmond", fontSize:20, opacity:0.95,  textShadow: "0 2px 6px rgba(0,0,0,0.45)"}}>Actress | Dreamer | Storyteller</p>
        <br /><br />
        <div className="hero-animate hero-buttons">
        <NavLink to="/showreel" style={{ textDecoration: "none" }}>
          <button
            aria-label="Watch Mukta Barve Showreel"
            className="btn cinzel-600 m-2"
            style={{ backgroundColor: "#F7DAC0",  boxShadow: "0 6px 18px rgba(40,25,10,0.45)",
  border: "none", }}
          >
            Showreel
          </button>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <button
            className="btn cinzel-600"
            style={{ backgroundColor: "#F7DAC0",  boxShadow: "0 6px 18px rgba(40,25,10,0.45)",
  border: "none", }}
          >
            Portfolio
          </button>
        </NavLink>
        </div>

        <NavLink to="/upcoming-projects" style={{ textDecoration: "none" }}>
          <p className="cinzel text-white">Upcoming Projects</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
