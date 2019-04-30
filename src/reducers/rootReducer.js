import { combineReducers } from "redux";
import { BoardReducer } from "./boardReducer";
import { reducer as formReducer } from "redux-form";

//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.
const rootReducer = combineReducers({
  board: BoardReducer,
  form: formReducer
});

export default rootReducer;
