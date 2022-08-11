import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "@/routes/index";
import { Provider } from "react-redux";
import store from "./redux/store";
// import App from "./App";

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)

// ReactDOM.render(<App />, document.getElementById("root"));

const App = () => {
  return useRoutes(routes);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
