import * as BoardActions from "../actions/boardActions";
const emptyCard = {
  Title: "",
  Description: ""
};
const initialState = {};

export function BoardReducer(state = initialState, action) {
  switch (action.type) {
    case BoardActions.ADD_LANE:
      const newLane = { name: action.payload, cards: [] };
      const lanes = state.lanes ? [...state.lanes, newLane] : [newLane];
      return { ...state, lanes }; //payload contains name of lane and empty card
    case BoardActions.ADD_CARD:
      const { card, index } = action.payload;
      const lanetoadd = state.lanes[index];
      const lane = { ...lanetoadd, cards: [...lanetoadd.cards, card] };
      return {
        ...state,
        lanes: [
          ...state.lanes.slice(0, index),
          lane,
          ...state.lanes.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}
