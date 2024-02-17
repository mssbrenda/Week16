import React, { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const Reviews = ({ reviews }) => {
  const [error, setError] = useState(null);


    return (
        <Container >
          {reviews.map(review => (
            <Card>{review}</Card>
          ))}
        </Container>
  );


  };



export default Reviews;
