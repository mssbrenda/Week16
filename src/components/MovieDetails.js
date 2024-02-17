import React, { useState, useEffect, useCallback } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import Service from '../Service';
import Movie from './Movie';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';






const MovieDetails = ({ movieId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const [reviews, setReviews] = useState([]);


  const fetchMovie = useCallback(async () => {
    try {
      console.log('fetching movie...')
      const movieData = await Service.getMovieById(movieId);
      console.log('fetched movie:' , movieData);

      setMovie(movieData);
    } catch (error) {
      setError('Failed to fetch movie');
      console.error('Error fetching movie: ', error);
    }
  }, [movieId]);

  const fetchReviews = useCallback(async () => {
    try {

      console.log('fetching reviews...')
      const reviewsData = await Service.getReviewsByMovieId(movieId);

   console.log('fetched reviews:', reviewsData )

      setReviews(reviewsData);
      // No need to set reviews state here since it's passed as a prop
    } catch (error) {
      setError('Failed to fetch reviews');
      console.error('Error fetching reviews: ', error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovie();
    fetchReviews();
  }, [fetchMovie, fetchReviews]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <Movie
        id={movie.id}
        title={movie.title}
        date={movie.releaseYear}
        image={movie.icon}
        description={movie.description}
      />
      <Accordion>
        <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={toggleAccordion}>
          {isOpen ? 'Hide Reviews' : 'Show Reviews'}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div>
            {isOpen && (
              <>
                <ReviewForm />
                <Reviews reviews={reviews} />
              </>
            )}
          </div>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
};

export default MovieDetails;
