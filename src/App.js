import React from "react";
import * as stylex from "@stylexjs/stylex";
import Child1 from "./child1";
export const styles = stylex.create({
  base: {
    color: "red",
    margin: "20px",
  },
});

const App = () => {
  return (
    <div>
      <h2 {...stylex.props(styles.base)}>Hello World Omkar!</h2>
      <Child1 />
    </div>
  );
};

export default App;
