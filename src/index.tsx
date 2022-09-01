import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "@/routes/index";
import "@/styles/index.css";
import "@/styles/common.less";

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
