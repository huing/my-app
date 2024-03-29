import { createStore, combineReducers } from "redux";
import lodash from "lodash";

// console.log(lodash);

export const countReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case "ADD":
      return state + payload;
    case "MINUS":
      return state - payload;
    default:
      return state;
  }
};

const store = createStore(combineReducers({ count: countReducer }));

export default store;
