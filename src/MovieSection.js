import React from 'react';
import { Link } from 'react-router-dom';
import './MovieSection.css';

const MovieSection = ({ title, movies, scrollable, sectionId, scrollLeft, scrollRight, handleScroll }) => {
  const getRatingClass = (rating) => {
    switch (rating) {
      case 'all':
        return 'rating-all';
      case '12':
        return 'rating-12';
      case '15':
        return 'rating-15';
      case '18':
        return 'rating-18';
      default:
        return '';
    }
  };

  const loadMovies = (movies) => {
    return movies.map((movie, index) => (
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className="movie-card">
          <div className="movie-rank">{index + 1}</div>
          <div className={`movie-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</div>
          <img src={movie.imgSrc} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <section className="movie-section">
      <h2>{title}</h2>
      {scrollable ? (
        <div className="scroll-container">
          <button className="scroll-button left" onClick={() => scrollLeft(sectionId)}>&#10094;</button>
          <div className="movie-list-wrapper" id={`${sectionId}-wrapper`} onScroll={() => handleScroll(sectionId)}>
            <div className="movie-list" id={sectionId}>
              {loadMovies(movies)}
            </div>
          </div>
          <button className="scroll-button right" onClick={() => scrollRight(sectionId)}>&#10095;</button>
        </div>
      ) : (
        <div className="movie-list">
          {loadMovies(movies)}
        </div>
      )}
    </section>
  );
};

export default MovieSection;
