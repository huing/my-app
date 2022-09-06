// import { useDispatch, useSelector } from "react-redux";

import { useReducer } from "react";
import { countReducer } from "./store";

const ReduxHook = () => {
  const [count, setCount] = useReducer(countReducer, 0);
  // const dispatch = useDispatch();
  const add = () => {
    setCount({ type: "ADD" });
  };

  return (
    <div>
      <div>HoosksPage</div>
      <p>{count}</p>
      <button onClick={add}>add</button>
    </div>
  );
};

export default ReduxHook;
