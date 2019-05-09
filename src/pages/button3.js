import React from "react"
import { styled } from "styletron-react"

export default () => {
  const ButtonGroup = ({ children }) => {
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, { groupIndex: index })
    );
  };

  const Button = ({ groupIndex, children }) => {
    const Btn = styled("button", props => ({
      margin: props.$isGrouped ? "0 2em 0 0" : "0px"
    }));
    return (
      <Btn $isGrouped={typeof groupIndex !== "undefined"}>
        {children} {groupIndex}
      </Btn>
    );
  };

  return (
    <>
      <p>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </p>
      <p>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </p>
      <p>
        <Button groupIndex={0}>One</Button>
        <Button groupIndex={1}>Two</Button>
        <Button groupIndex={2}>Three</Button>
      </p>
    </>
  );
};