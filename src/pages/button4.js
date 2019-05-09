import React from "react"
import { styled } from "styletron-react"

export default () => {
  const Button = styled("button", props => ({
    fontSize: props.$compact ? "12px" : "16px",
    padding: props.$compact ? "0.25em" : "0.5em",
    margin: "0.5em"
  }));
  return (
    <>
      <Button>Standard Button</Button>
      <Button $compact>Compact Button</Button>
    </>
  );
};