import React from "react";
import mukta from "../assets/Mukta 2.jpg";
import mukta2 from '../assets/about-section-image.png'
import "../index.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-center text-light"
      style={{
        backgroundImage: `url(${mukta2})`,
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
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.2) 100%)",
          zIndex: 1,
        }}
      ></div>

      <div style={{ zIndex: 2 }}>
        <h1 className="cinzel" style={{fontWeight:700, color:"beige", fontSize:40}}>
          <b>Mukta Barve</b>
        </h1>
        <p className="cinzel" style={{color:"blanchedalmond", fontSize:20}}>Actress | Dreamer | Storyteller</p>
        <br /><br />
        <h4
          style={{
            color: "#A0522D",
            textShadow: "0 0 3px #F5DEB3, 0 0 12px #8B4513",
            fontWeight: "bold",
          }}
        >
          कन्या ऐसी देई , जैसी मीरा आणि{" "}
            <h2><b>मुक्ताबाई</b></h2>
        </h4>
        <NavLink to="/showreel" style={{ textDecoration: "none" }}>
          <button
            className="btn cinzel-600 m-2"
            style={{ backgroundColor: "#F7DAC0" }}
          >
            Showreel
          </button>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <button
            className="btn cinzel-600"
            style={{ backgroundColor: "#F7DAC0" }}
          >
            Portfolio
          </button>
        </NavLink>

        <NavLink to="/upcoming-projects" style={{ textDecoration: "none" }}>
          <p className="cinzel text-white">Upcoming Projects</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
