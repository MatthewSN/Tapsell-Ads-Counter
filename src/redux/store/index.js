import { createStore, combineReducers } from "redux";
import AdsStatusReducer from "../reducres/adsStatus";

const store = createStore(
  combineReducers({
    adsStatus: AdsStatusReducer
  })
);

export default store;
