import React from 'react'
import Helmet from 'react-helmet'

import { createStyled } from 'styletron-react'
import { driver, getInitialStyle } from 'styletron-standard'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import THEME from '../theme'
import LogoHeader from '../components/logo-header-ja'
import Twitter from '../components/twitter-straight'
import Github from '../components/github-straight'
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

const HeaderDiv = styled('header', ({ $theme }) => ({
  position: 'absolute',
  display: 'inline-block',
  width: THEME.width[0],
  zIndex: 2,
  backgroundColor: 'rgba(255,255,255,0)',
}));
HeaderDiv.displayName = 'HeaderDiv';

const Nav = styled('nav', ({ $theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  paddingTop: '1em',
  paddingRight: '15rem',
  '@media screen and (max-width: 959px) and (min-width: 768px)': {
    paddingTop: '.8rem',
    paddingRight: '.5rem',
  },
  '@media screen and (max-width: 767px)': {
    paddingTop: '.8rem',
    paddingRight: '.5rem',
  },
}));
Nav.displayName = 'Nav';

const SpanLarge = styled('span', ({ $theme }) => ({
  fontFamily: THEME.fontFamily[0],
  '@media screen and (max-width: 959px) and (min-width: 768px)': {
    display: 'none',
  },
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
}));
SpanLarge.displayName = 'SpanLarge';

const StyledTwitterSquare = styled('div', ({ $theme }) => ({
  display: 'inline-block',
  position: 'absolute',
  bottom: '-3px',
  '@media screen and (max-width: 959px) and (min-width: 768px)': {
    display: 'none',
  },
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
}));
StyledTwitterSquare.displayName = 'StyledTwitterSquare';

const StyleAnchor1 = styled('a', ({ $theme }) => ({
    color: 'white',
    paddingTop: '.3rem',
    paddingRight: '.8rem',
    paddingBottom: '.3rem',
    paddingLeft: '.8rem',
    textDecorationLine: 'none',
    ':before': {
      backgroundColor: 'rgba(255,255,255,.7)',
      content: '',
      position: 'absolute',
      width: '100%',
      height: '1px',
      bottom: '0px',
      left: '0px',
    },
    ':hover:before': {
      visibility: 'visible',
    },
    ':hover:after': {
      visibility: 'hidden',
    },
    ':after': {
      backgroundColor: 'rgba(255,255,255,.7)',
      content: '',
      position: 'absolute',
      width: '100%',
      height: '1px',
      bottom: '0px',
      left: '0px',
    },
    '@media screen and (max-width: 959px) and (min-width: 768px)': {
      display: 'none',
    },
    '@media screen and (max-width: 767px)': {
      display: 'none',
    },
  }),
);
StyleAnchor1.displayName = 'StyleAnchor1';

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
                <html lang='ja' />
              </Helmet>
              <HeaderDiv>
                <Link id='#home' to='/'>
                  <LogoHeader />
                </Link>
                  <Nav>
                    <SpanLarge>
                    </SpanLarge>
                    <StyleAnchor1 href='#blog'>
                      <SpanLarge>ブログ</SpanLarge>
                    </StyleAnchor1>
                    <StyleAnchor1 href='#docs'>
                      <SpanLarge>ドックス</SpanLarge>
                    </StyleAnchor1>
                    <StyleAnchor1 href='#profile'>
                      <SpanLarge>プロフィール</SpanLarge>
                    </StyleAnchor1>
                    <StyleAnchor1 href='#real-time-schedule'>
                      <SpanLarge>リアル・タイムス・スケジュール</SpanLarge>
                    </StyleAnchor1>
                    <StyleAnchor1 href='#contact'>
                      <SpanLarge>お問い合わせ</SpanLarge>
                    </StyleAnchor1>
                    <StyleAnchor1 href='https://twitter.com/@bf7afa37fa94ja'>
                      <SpanLarge>
                        <Twitter></Twitter>
                      </SpanLarge>
                    </StyleAnchor1>
                    <StyleAnchor1 href='https://github.com/tidiview/francois-vidit.com'>
                      <SpanLarge>
                        <Github></Github>
                      </SpanLarge>
                    </StyleAnchor1>
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