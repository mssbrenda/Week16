import React, { useState } from "react";
import Service from "../Service";

const ReviewForm = ({ movieId }) => {

  const [review, setReview] = useState('');

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Service.createReview(movieId, review);
      setReview('');
      // Optionally, you can fetch and update the reviews list after submission
    } catch (error) {
      console.log('Error submitting review: ', error);
    }
  };

  return (
    <div>
      <h3>Add Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={review}
          onChange={handleReviewChange}
          placeholder="Write your review here"
          rows={4}
          cols={50}
          required
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
