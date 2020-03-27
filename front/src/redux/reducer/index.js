import { combineReducers } from "redux";
import selection from "./players";
import usersFetch from "./users";
import bank from "./bank";

export default combineReducers({
  selection,
  usersFetch,
  bank
});
