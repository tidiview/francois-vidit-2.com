import React from 'react'

import { createStyled } from 'styletron-react'
import { driver, getInitialStyle } from 'styletron-standard'

import THEME from '../theme'

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

const FrontImage = styled("div", ({ $theme }) => ({
  backgroundImage: "url('./landing-curtain-2240.jpg')",
  /* Full height */
  height: "100%",
  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
  }));
FrontImage.displayName = "FrontImage";

function Home() {
  return (
    <ThemeProvider>
      <FrontImage>イメージ
      </FrontImage>
    </ThemeProvider>
  );
}

export default Home;