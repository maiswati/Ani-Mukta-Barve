import React from "react";
import { films } from "../data";
import { useState } from "react";
import { reversedFilms } from "../data";
import zee5 from '../assets/logozee5.jpeg'
import primevideo from '../assets/primevideo.webp'
import yt from '../assets/yt.webp'
import "../index.css";
const Films = () => {
    const [liked, setLiked] = useState(Array(reversedFilms.length).fill(false));
    const toggleLike = (index) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked)
    }
    const ottlogos = {
      "Amazon Prime": primevideo,
      "ZEE 5": zee5,
      "YouTube": yt
    }
  return (
    <div
      className="container-fluid m-auto"
      style={{ backgroundColor: "#FEFBF8", minHeight: "100vh" }}
    >
      <div className="row px-4 py-4 mt-5">
        <h1
          className="cinzel text-center mb-5 mt-4"
          style={{ textDecoration: "underline" }}
        >
          Films
        </h1>
      </div>
      <div className="d-flex justify-content-center gap-5 flex-wrap mb-4">
        {reversedFilms.map((film, i) => {
          return (
            <>
              <div
  key={i}
  className="shadow-lg p-3 bg-light rounded"
  style={{ width: "100%" }}
>
  {/* TOP ROW */}
  <div className="d-flex justify-content-between gap-4">
    {/* Image */}
    <div className="mt-2">
      <img
        className="img-fluid rounded"
        width="250px"
        src={film.src}
        alt={film.film}
        loading="lazy"
      />
    </div>

    {/* Description */}
    <div className="flex-grow-1">
      <h3 className="space-mono-bold">{film.film}</h3>
      <p className="space-mono-regular">Role - {film.role}</p>
      <p className="text-muted">Year : {film.year}</p>
    </div>

    {/* Heart */}
    <i
      onClick={() => toggleLike(i)}
      className={`fa-${liked[i] ? "solid" : "regular"} fa-heart`}
      style={{ color: "#c72323", cursor: "pointer", fontSize: "20px" }}
    ></i>
  </div>

  {/* OTT ROW (BELOW EVERYTHING) */}
  {film.availableOn && ottlogos[film.availableOn] && (
    <div className="ott-container mt-3 ms-2">
      <img
        src={ottlogos[film.availableOn]}
        alt={film.availableOn}
        className="ott-logo"
      />
      <span className="ott-text">
        Watch on {film.availableOn}
      </span>
    </div>
  )}
</div>

            </>
          );
        })}
      </div>
    </div>
  );
};

export default Films;
