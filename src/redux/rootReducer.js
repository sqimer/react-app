import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  weatherReducer,
  newsReducer,
});

export default rootReducer;
