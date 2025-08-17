import React from 'react'
import { useState } from 'react';
import {tvShows} from '../data.js';
const TVShows = () => {
  const [liked, setLiked] = useState(Array(tvShows.length).fill(false));
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
            TV Shows
          </h1>
        </div>
        <div className="d-flex justify-content-center gap-5 flex-wrap mb-4">
          {tvShows.map((tvShow, i) => {
            return (
              <>
                <div key={i} className="shadow-lg p-3 bg-light d-flex justify-content-between rounded gap-4">
                  <div className="mt-5">
                      <img className="img-fluid rounded" width='250px' src={tvShow.src} alt={tvShow.show} />
                  </div>
                  <div>
                      <h3 className="space-mono-bold">{tvShow.show}</h3>
                      <p className="space-mono-regular">Role - {tvShow.role}</p>
                      <p className="text-muted">Year : {tvShow.year}</p>
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

export default TVShows
