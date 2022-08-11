import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from "redux-promise";
import isPromise from "is-promise";
// import { createStore } from "./createStore";
// import applyMiddleware from "./applyMiddleware";

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

const store = createStore(
  // countReducer,
  combineReducers({ count: countReducer }),
  applyMiddleware(thunk, promise, logger)
);

export default store;

function logger({ dispatch, getState }) {
  return (next) => (action) => {
    const preState = getState();
    console.log("------------");
    console.log("pre state", preState);
    const returenValue = next(action);
    const nextState = getState();
    console.log("next state", nextState);
    console.log("------------");
    return returenValue;
  };
}

function thunk({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}

function promise({ dispatch, getState }) {
  return (next) => (action) => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}

// return next => {
//   return action => {
//     console.log('action');
//   }
// }
