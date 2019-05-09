import React from "react"
import { styled } from "styletron-react"

class SuperButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false };
    }
    render() {
      const Button = styled("button", props => ({
        padding: "0.5em 1em",
        color: props.$isActive ? "#fff" : "#000",
        backgroundColor: props.$isActive ? "blue" : "none",
        fontSize: "1em",
        borderRadius: "4px",
        border: "1px solid #aaa",
        ":hover": {
          backgroundColor: props.$isActive ? "green" : "yellow"
        },
        "@media screen and (max-width: 767px)": {
            backgroundColor: props.$isActive ? "red" : "violet"
        },
      }));
      Button.displayName = "Button";

      const { isActive } = this.state;

      return (
        <Button
          $isActive={isActive}
          onClick={() => {
            this.setState(prev => ({ isActive: !prev.isActive }));
          }}
        >
          It is {isActive ? "on" : "off"}!
        </Button>
      );
    }
}

function Home() {
  return <SuperButton></SuperButton>;
}

export default Home;