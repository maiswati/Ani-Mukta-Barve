import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg"
      style={{
        backgroundColor: "rgba(245, 245, 220, 0.7)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div class="container-fluid">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <a class="navbar-brand cinzel-600" style={{ color: "brown" }}>
            Mukta Barve
          </a>
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a class="nav-link active cinzel-600" aria-current="page" href="#">
                  About
                </a>
              </li>
            </NavLink>
            <NavLink to="/stats" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a class="nav-link active cinzel-600" aria-current="page" href="#">
                  Stats
                </a>
              </li>
            </NavLink>
            <NavLink to="/upcoming-projects" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a class="nav-link active cinzel-600" aria-current="page" href="#">
                  Upcoming Projects
                </a>
              </li>
            </NavLink>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle active cinzel-600"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Carrer
              </a>
              <ul class="dropdown-menu">
                <NavLink to="/films" style={{ textDecoration: "none" }}>
                  <li>
                    <a class="dropdown-item cinzel-600" href="#">
                      Films
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/tvshows" style={{ textDecoration: "none" }}>
                  <li>
                    <a class="dropdown-item cinzel-600" href="#">
                      Television Shows
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/theatre" style={{ textDecoration: "none" }}>
                  <li>
                    <a class="dropdown-item cinzel-600" href="#">
                      Theatre
                    </a>
                  </li>
                </NavLink>
              </ul>
            </li>
            <NavLink to="/awards" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a class="nav-link active cinzel-600" aria-current="page" href="#">
                  Awards
                </a>
              </li>
            </NavLink>
            <NavLink to="/family" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a class="nav-link active cinzel-600" aria-current="page" href="#">
                  Family
                </a>
              </li>
            </NavLink>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <NavLink className='text-dark' target="_blank"  to='https://www.instagram.com/muktabarve?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
            <i class="fa-brands fa-square-instagram"></i>            
            </NavLink>
            <NavLink className='text-dark' target="_blank" to='https://www.facebook.com/muktaforfans'>
            <i class="fa-brands fa-facebook"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
