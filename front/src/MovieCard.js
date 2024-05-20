import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={movie.imgSrc} alt={movie.title} />
      <p>{movie.title} ({movie.year})</p>
    </div>
  );
}

export default MovieCard;
