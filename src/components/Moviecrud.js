import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../Service";
import Movie from "./Movie";
import "./MovieCrud.css";
import StarRating from "./StarRating";
import AverageRating from "./AverageRating";

const MovieCrud = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState();
  const [ratings, setRatings] = useState([]);
  const [movie, setMovie] = useState();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleRatingSubmit = () => {
    setRatings([...ratings, rating]);
    setRating(0);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const moviesData = await Service.getAllMovies();
      setMovies(moviesData);
    } catch (error) {
      setError(error.message || "Failed to fetch Movies");
    }
  };

  return (
    <div className="movie-grid-container">
      <h2>Latest Movies</h2>
      {error && <p>{error}</p>}
      <div className="movie-grid">
        {movies.map((movie) => (
         
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Movie
              id={movie.id}
              title={movie.title}
              date={movie.releaseYear}
              image={movie.icon}
              description={movie.description}
            />
          </Link>
         
        ))}
      </div>
    </div>
  );
};

export default MovieCrud;
