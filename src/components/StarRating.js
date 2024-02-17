import React, { useState } from "react";

const StarRating = ({ initialRating, onRatingChange, onSubmit }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={starValue <= rating ? "star-filled" : "star-empty"}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733; {/* Unicode character for a star */}
          </span>
        );
      })}
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default StarRating;
