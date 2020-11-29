import { combineReducers } from "redux";
import write from "./Write";

const rootReducer = combineReducers({
  write,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
