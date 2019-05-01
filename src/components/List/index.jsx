import React from "react";

const List = props => {
  return (
    <ul>
      {lanes.map((lane, index) => (
        <li key={index}>
          <Lane
            lane={lane}
            handleAddCard={values => this.handleAddCard(values, index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
