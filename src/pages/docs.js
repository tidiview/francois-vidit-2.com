import React from "react"

import { createStyled } from "styletron-react"
import { driver, getInitialStyle } from "styletron-standard"

import THEME from "../theme"

const { Provider, Consumer } = React.createContext();

const ThemeProvider = ({ children }) => (
  <Provider value={THEME}>{children}</Provider>
);

const wrapper = StyledComponent =>
  function withThemeHOC(props) {
    return (
      <Consumer>
        {theme => <StyledComponent {...props} $theme={theme} />}
      </Consumer>
    );
  };

const styled = createStyled({ wrapper, getInitialStyle, driver });

const Button = styled("button", ({ $theme }) => ({
  backgroundColor: $theme.colors.primary[2],
  color: "#FFF",
  fontSize: $theme.sizing[4],
  padding: $theme.sizing[2]
}));
Button.displayName = "Button";

function Home() {
  return (
      <ThemeProvider>
        <Button>Button</Button>
      </ThemeProvider>
  )
};

export default Home;