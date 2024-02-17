import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

//this component defines Movie

const Movie = ({ id, title, image, description, date }) => {
  return (
    <Card
      style={{
        width: "18rem ",
        margin: "5px",
        padding: "5px",
   
      }}
    >
      <Col xs={6} md={4}>
        <Image
          src={image}
          thumbnail
          style={{ width: "100%", height: "auto" }}
        />
      </Col>
      <Card.Body>
        <Card.Img />
        <Card.Title>{title}</Card.Title>
        <br />
        <Card.Text>
          Release Date: {date}
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
