import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "./store/configureStore";
import * as BoardActions from "./actions/boardActions";
import Routes from "./Routes";

const store = configureStore();
window.store = store;
store.dispatch(BoardActions.AddLane("lane 1"));
// store.dispatch(BoardActions.AddLane("lane 2"));
// store.dispatch(
//   BoardActions.AddCard({ title: "card 1", description: "first card" }, 1)
// );

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
