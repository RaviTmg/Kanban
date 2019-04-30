import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

function Lane(props) {
  const { lane } = props;
  return (
    <div>
      {lane.name}
      <ul>
        {lane.cards.map((card, index) => (
          <li>
            <Card card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Lane.propTypes = {};

export default Lane;
