import React, { useEffect, useState } from "react";
import { ThemeContext } from "./AppContext";
import "./App.css";

const Button = (props: { theme: string }) => {
  // 广播
  const content = ThemeContext;
  console.log("render button");
  // consumers
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <button
          style={{
            background: props.theme,
            color: value,
            width: 100,
            height: 60,
          }}
        >
          click
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

const ThemedButton = (props: { theme: string }) => {
  return <Button theme={props.theme} />;
};

function Toolbar(props: { theme: string }) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("yellow");
  return (
    <div className="App">
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>点击</button>
      </div>
      <ThemeContext.Provider value={color}>
        <Toolbar theme="red" />
      </ThemeContext.Provider>
    </div>
  );
};
export default App;
