import React from "react"
import Helmet from 'react-helmet'

import { createStyled } from "styletron-react"
import { driver, getInitialStyle } from "styletron-standard"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import THEME from "../theme"
import LogoHeader from '../components/logo-header-ja'

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
  backgroundColor: 'rgba(255,255,255,0)',
  position: 'absolute',
  display: 'inline-block',
  width: '100%',
  zIndex: 10,
}));
HeaderDiv.displayName = "HeaderDiv";

const Nav = styled("nav", ({ $theme }) => ({
  position: 'absolute',
  top: '50%',
  right: 0,
  paddingRight: '15rem',
  "@media screen and (max-width: 959px) and (min-width: 768px)": {
      paddingRight: '5rem'
  },
  "@media screen and (max-width: 767px)": {
      paddingRight: '.5rem'
  },
}));
Nav.displayName = "Nav";

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
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <HeaderDiv>
                <Link to="/">
                  <LogoHeader />
                </Link>
                <Nav>
                  <Link to="/profile/" style={{ color: "white", textDecorationLine: "none" }}>Profile</Link>
                </Nav>
              </HeaderDiv>
              </ThemeProvider>
          )
        }
        />
  )
};

export default Home;