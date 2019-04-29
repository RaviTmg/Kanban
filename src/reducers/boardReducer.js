import * as BoardActions from "../actions/boardActions";
const emptyCard = {
  Title: "",
  Description: ""
};
const initialState = {
  lanes: []
};

export function BoardReducer(state = initialState, action) {
  switch (action.type) {
    case BoardActions.ADD_LANE:
      const newLane = { name: action.payload, cards: emptyCard };
      return { ...state, lanes: [...state.lanes, newLane] }; //payload contains name of lane and empty card
    case BoardActions.ADD_CARD:
      const { card, index } = action.payload;
      const lanetoadd = state.lanes[index];
      const lane = { ...lanetoadd, cards: [...lanetoadd.cards, card] };
      return { ...state, lanes: [...state.lanes, lane] };
    default:
      return state;
  }
}
