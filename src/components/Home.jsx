import React from "react";
import mukta from "../assets/Mukta 2.jpg";
import "../index.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-center text-light"
      style={{
        backgroundImage: `url(${mukta})`,
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "top center",
        height: "100vh",
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
          backgroundColor: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      ></div>

      <div style={{ zIndex: 2 }}>
        <h1 className="cinzel"><b>Mukta Barve</b></h1>
        <p className="cinzel">Actress | Dreamer | Storyteller</p>
        <h4><b>कन्या ऐसी देई , जैसी मीरा आणि मुक्ताबाई</b></h4>
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
