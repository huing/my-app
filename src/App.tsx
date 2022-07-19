import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    let a: string;
    // a = 1;
    a = "e";
    console.log(a);
  }, []);
  return (
    <div className="App">
      <h1> Hello, World!ddddsdddss </h1>
    </div>
  );
};
export default App;
