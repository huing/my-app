import React, { Component, useEffect, useReducer } from "react";
import store from "./store";
import { connect } from "react-redux";

@connect(({ count }) => ({ count }))
class Redux extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  add = () => {
    store.dispatch({
      type: "ADD",
      payload: 100,
    });
  };
  asyncadd = () => {
    store.dispatch((dispatch, getState) => {
      console.log("getState", getState());
      setTimeout(() => {
        dispatch({
          type: "ADD",
        });
      }, 1000);
    });
  };

  promiseMinus = () => {
    store.dispatch(Promise.resolve({ type: "MINUS", payload: 100 }));
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div>index</div>
        <div>{store.getState().count}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyncadd}>asyncadd</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    );
  }
}

export default Redux;

// const Redux = () => {
//   // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
//   useEffect(() => {
//     store.subscribe(() => {
//       store.getState();
//       // console.log(123);
//       // force
//       // this.forceUpdate();
//     });
//   }, [store]);
//   const add = () => {
//     store.dispatch({
//       type: "ADD",
//       payload: 100,
//     });
//   };
//   return (
//     <div>
//       <div>index</div>
//       <div>{store.getState()}</div>
//       <button onClick={add}>add</button>
//     </div>
//   );
// };

// export default Redux;
