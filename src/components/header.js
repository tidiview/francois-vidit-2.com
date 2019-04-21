import React from "react"

import { createStyled } from "styletron-react"
import { driver, getInitialStyle } from "styletron-standard"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

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

const HeaderDiv = styled("div", ({ $theme }) => ({
  backgroundColor: 'white',
  paddingBlockStart: '21.44px',
  paddingBlockEnd: '21.44px'
}));
HeaderDiv.displayName = "HeaderDiv";

const HeaderH1 = styled("div", ({ $theme }) => ({
  marginBlockStart: 0
}));
HeaderH1.displayName = "HeaderH1";

function Home() {
  return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={
          data => (
            <ThemeProvider>
              <HeaderDiv>
                <Link to="/">
                  <HeaderH1>{data.site.siteMetadata.title}</HeaderH1>
                </Link>
                <nav>
                  <Link to="/profile/">Profile</Link> 
                </nav>
              </HeaderDiv>
              </ThemeProvider>
          )
        }
        />
  )
};

export default Home;