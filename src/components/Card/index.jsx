import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const { card } = props;
  return <div>{card.title}</div>;
}

Card.propTypes = {};

export default Card;
