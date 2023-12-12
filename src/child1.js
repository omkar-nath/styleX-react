import React from "react";

import * as stylex from "@stylexjs/stylex";
export const child1 = stylex.create({
  hello: {
    color: "yellow",
    padding: "20px",
    margin: "30px",
  },
});

const Child1 = () => {
  return <h2 {...stylex.props(child1.hello)}>Hello World child!</h2>;
};

export default Child1;
