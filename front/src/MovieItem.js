import React from 'react';
import './MovieItem.css';

function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <span className="rating">{movie.rating}</span>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieItem;
