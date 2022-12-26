import React, { useState, useEffect } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import { API_KEY } from "../request";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "450",
    width: "700",
    playerVars: {
      autoplay: "1",
    },
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleMovie = (id)=> {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0]); 
      }else{
        console.log("Array Empty");
      }
    })
    toggleModal()
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-poster">
        {movies.map((movie, index) => (
          <img
            onClick={()=>handleMovie(movie.id)}
            key={index}
            className="poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {modal && (
        <div className="youtube" onClick={toggleModal}>
          <i className="bx bx-x" onClick={toggleModal}></i>
          {urlId && <Youtube videoId={urlId.key} opts={opts} className="yt-plyer"/>}
        </div>
      )}
    </div>
  );
}

export default Row;
