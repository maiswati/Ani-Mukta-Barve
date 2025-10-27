import React from 'react'
import { useState } from 'react';
import {shortFilms} from '../data.js';
const ShortFilms = () => {
  const [liked, setLiked] = useState(Array(shortFilms.length).fill(false));
      const toggleLike = (index) => {
          const newLiked = [...liked];
          newLiked[index] = !newLiked[index];
          setLiked(newLiked)
      }
    return (
      <div
        className="container-fluid m-auto"
        style={{ backgroundColor: "#FEFBF8", minHeight: "100vh" }}
      >
        <div className="row m-5">
          <h1
            className="cinzel text-center mb-5 mt-4"
            style={{ textDecoration: "underline" }}
          >
            Short Films
          </h1>
        </div>
        <div className="d-flex justify-content-center gap-5 flex-wrap mb-4">
          {shortFilms.map((shortFilm, i) => {
            return (
              <>
                <div key={i} className="shadow-lg p-3 bg-light d-flex justify-content-between rounded gap-4">
                  <div className="mt-5">
                      <img className="img-fluid rounded" width='250px' src={shortFilm.src} alt={shortFilm.show} />
                  </div>
                  <div>
                      <h3 className="space-mono-bold">{shortFilm.show}</h3>
                      <p className="space-mono-regular">Role - {shortFilm.role}</p>
                      <p className="text-muted">Year : {shortFilm.year}</p>
                  </div>
                  <i onClick={() => toggleLike(i)} class={`fa-${liked[i] ? "solid" : "regular"} fa-heart`} style={{color: "#c72323"}}></i>
                </div>
              </>
            );
          })}
        </div>
      </div>
  )
}

export default ShortFilms
