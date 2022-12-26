import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="banner-content">
          <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
          <p>{movie?.overview}</p>
          <button className="btn-watch">
            <i className="bx bx-play-circle" /> Watch
          </button>
          <button className="btn-list">
            <i className="bx bx-message-square-add" /> Add List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
