import Redux from "./Redux";
import { Provider } from "react-redux";
import store from "./store";

const ReduxStore = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};

export default ReduxStore;
