import componse from "./compose";

function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const midAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };

    const chain = middlewares.map((middleware) => middleware(midAPI));
    dispatch = componse(...chain)(store.dispatch);

    return { ...store, dispatch };
  };
}

export default applyMiddleware;
