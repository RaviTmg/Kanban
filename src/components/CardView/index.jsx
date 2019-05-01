import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
function CardView(props) {
  const { card } = props;
  return (
    <Card>
      {
        // <Card.Img variant="top" src="holder.js/100px180" />
      }
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        {
          // <Button variant="primary">Go somewhere</Button>
        }
      </Card.Body>
    </Card>
  );
}

CardView.propTypes = {
  card: PropTypes.exact({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string
  })
};

export default CardView;
