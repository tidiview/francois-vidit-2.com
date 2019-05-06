import React from 'react'
import { Link } from "gatsby"
import { styled } from 'styletron-react'
import Arrow from '../components/landing-curtain-arrow-up-svg'
import MarkFooter from '../components/svg-mark-footer'

const Footer = styled('footer', {
    position: 'relative',
    background: '#333',
    height: '6rem',
    right: '0',
    bottom: '0',
    left: '0',
    textAlign: 'center',
    paddingLeft: '7rem',
    paddingRight: '7rem',
    display: 'block',
    boxSizing: 'border-box',
});
Footer.displayName = 'Footer';

const ToTop = styled('div', {
    display: 'inline',
    position: 'relative',
    bottom: '21px',
    textAlign: 'center',
    right: 0,
    left: 0,
});
ToTop.displayName = 'ToTop';

const SpanArrow = styled('span', {
    paddingTop: '6px',
    height: '20px',
    background: '#333',
    width: '3rem',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    display: 'inline-block',
});
SpanArrow.displayName = 'SpanArrow';

const Padding = styled('div', {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    marginTop: '16px',
    verticalAlign: 'top',
    display: 'inline-box',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontWeight: '400',
});
Padding.displayName = 'Padding';

const Flex = styled('div', {
    color: '#3B94D9',
    verticalAlign: 'top',
    display: 'inline-block',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: '20%',
});
Flex.displayName = 'Flex';

const StyledLink = styled(Link, props => {
    return {
        margin: 0,
        verticalAlign: 'top',
        fontFamily: 'Yu Gothic Medium, sans-serif',
        color: '#3B94D9',
        textDecoration: 'none',
        ':hover': {
            color: '#fff',
        },
    }
});
StyledLink.displayName = 'StyledLink';

export default () => (
  <Footer>
    <ToTop>
        <SpanArrow>
            <a href="#top"><Arrow></Arrow></a>
        </SpanArrow>
    </ToTop>
    <Padding>
        <Flex>
            <StyledLink to="/profile">プロフィール</StyledLink>
            <br></br>
            <StyledLink to="/blog">ブログ</StyledLink>
        </Flex>
        <Flex $style={{ width: '60%' }}>
            <a href="#top"><MarkFooter></MarkFooter></a>
        </Flex>
        
        <Flex>
            <StyledLink to="/profile">プロフィール</StyledLink>
            <br></br>
            <StyledLink to="/blog">ブログ</StyledLink>
        </Flex>
    </Padding>
  </Footer>
)