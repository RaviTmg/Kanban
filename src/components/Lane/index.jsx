import React from "react";
import PropTypes from "prop-types";
import CardView from "../CardView";
import AddCardForm from "../Forms/AddCardForm";
import { LaneContainer } from "../../containers/Lanecontainer";

import styles from "./style.css";

const Lane = props => {
  const { lane, handleAddCard } = props;
  return (
    <div className={styles.lane}>
      {lane.name}
      <ul className={styles.cardList}>
        {lane.cards.map((card, index) => (
          <li key={index}>
            <CardView card={card} />
          </li>
        ))}
      </ul>
      <AddCardForm onSubmit={handleAddCard} />
    </div>
  );
};

Lane.propTypes = {
  lane: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cards: PropTypes.array
  }).isRequired
};

export default Lane;
