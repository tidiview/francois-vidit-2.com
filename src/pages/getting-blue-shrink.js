import React from "react"
import { styled } from "styletron-react";

export default () => {
  const Block = styled("div", {
    backgroundColor: "#DDD",
    color: "#000",
    padding: "0.5em 1em",
    border: "2px solid black",
    ":hover": {
      border: "2px dashed darkred"
    },
    "@media screen and (max-width: 880px)": {
      backgroundColor: "#276EF1",
      color: "#fff"
    }
  });
  return <Block>I get blue when the browser window shrinks</Block>;
};