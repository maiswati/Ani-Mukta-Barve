import React from "react";
import asambhav from "../assets/asambhav.png";
import ravsaheb from "../assets/raavsaheb.webp";
import mpm4 from "../assets/mpmm4.jpeg";
import maya2 from "../assets/mayamuk.jpeg";

const UpcomingProjects = () => {
  return (
    <div
      className="container-fluid py5"
      style={{ backgroundColor: "#1C1B1B", minHeight: "100vh" }}
    >
      <div className="row px-5 py-4 mt-5">
        <h1
          className="cinzel text-center text-light mb-5"
          style={{ textDecoration: "underline" }}
        >
          Upcoming Projects
        </h1>
        <div className="projects-grid">
          <div className="project-card">
            <img src={maya2} alt="Maya" />
            <h3>Maya</h3>
            <p>Release Date · 27 Feb 2026</p>
            <button>Show Details</button>
          </div>

          <div className="project-card">
            <img src={mpm4} alt="MPM 4" />
            <h3>Mumbai Pune Mumbai 4</h3>
            <p>Release Date · 2027</p>
            <button>Show Details</button>
          </div>

          <div className="project-card">
            <img src={ravsaheb} alt="Raavsaaheb" />
            <h3>Raavsaaheb</h3>
            <p>Release Date · TBA</p>
            <button>Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
