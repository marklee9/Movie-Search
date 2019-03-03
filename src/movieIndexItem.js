import React from 'react';
import "./movieIndexitem.css"

function MovieIndexItem({ title, date, vote, poster, overview }) {
  return (
    <div className="movie-index-item">
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt=""/>
      </div>
      <div className="content">
        <div className="info">
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{vote}</p>
        </div>
        <div className="overview">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieIndexItem