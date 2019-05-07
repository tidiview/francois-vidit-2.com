import React from "react"
import Helmet from 'react-helmet'

import { createStyled } from "styletron-react"
import { driver, getInitialStyle } from "styletron-standard"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import THEME from "../theme"
import LogoHeader from '../components/logo-header-ja'
import TwitterSquare from '../components/twitter-square'
import ButtonNav from '../components/button-nav'

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

const HeaderDiv = styled("header", ({ $theme }) => ({
  position: 'absolute',
  display: 'inline-block',
  width: '100%',
  zIndex: 2,
  backgroundColor: 'rgba(255,255,255,0)',
}));
HeaderDiv.displayName = "HeaderDiv";

const Nav = styled("nav", ({ $theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  paddingTop: '1em',
  paddingRight: '15rem',
  "@media screen and (max-width: 959px) and (min-width: 768px)": {
    paddingTop: '.8rem',
    paddingRight: '5rem',
  },
  "@media screen and (max-width: 767px)": {
    paddingTop: '.8rem',
    paddingRight: '.5rem',
  },
}));
Nav.displayName = "Nav";

const SpanLarge = styled("span", ({ $theme }) => ({
  display: 'initial',
  fontFamily: THEME.fontFamily[0],
  "@media screen and (max-width: 959px) and (min-width: 768px)": {
    display: 'none',
  },
  "@media screen and (max-width: 767px)": {
    display: 'none',
  },
}));
SpanLarge.displayName = "SpanLarge";

const StyledTwitterSquare = styled('a', ({ $theme }) => ({
    width: '16px',
    height: '16px',
}));
StyledTwitterSquare.displayName = "StyledTwitterSquare";

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
                    <SpanLarge>
                      <StyledTwitterSquare>
                        <TwitterSquare></TwitterSquare>
                      </StyledTwitterSquare>
                      </SpanLarge>
                    <Link to="/profile/" style={{ color: "white", textDecorationLine: "none" }}>
                    <SpanLarge>プロフィール</SpanLarge></Link>
                    <ButtonNav></ButtonNav>
                  </Nav>
              </HeaderDiv>
              </ThemeProvider>
          )
        }
        />
  )
};

export default Home;