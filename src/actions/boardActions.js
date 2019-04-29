export const ADD_LANE = "ADD_LANE";
export const REMOVE_LANE = "REMOVE_LANE";

export const ADD_CARD = "ADD_CARD";
export const MOVE_CARD = "MOVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

export function AddLane(name) {
  return {
    type: ADD_LANE,
    payload: name
  };
}

export function AddCard(card, index) {
  return {
    type: ADD_CARD,
    payload: { card, index }
  };
}
