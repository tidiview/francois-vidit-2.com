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
    left: '0',
    textAlign: 'center',
    paddingRight: '7rem',
    paddingLeft: '7rem',
    fontFamily: 'Yu Gothic Medium, sans-serif',
    '@media screen and (max-width: 767px)': {
        height: '15rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
});
Footer.displayName = 'Footer';

const ToTop = styled('div', {
    display: 'inline',
    position: 'relative',
    textAlign: 'center',
    right: 0,
    bottom: '21px',
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
    right: '112px',
    left: '112px',
    marginTop: '16px',
    width: 'calc(100% - 224px)',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        right: '64px',
        left: '64px',
        width: 'calc(100% - 128px)',
    },
    '@media screen and (max-width: 767px)': {
        right: '16px',
        left: '16px',
        width: 'calc(100% - 32px)',
    },
});
Padding.displayName = 'Padding';

const Flex = styled('div', {
    color: '#3B94D9',
    width: '20%',
    verticalAlign: 'top',
    textAlign: 'center',
    display: 'inline-block',
    lineHeight: '27px',
    '@media screen and (max-width: 767px)': {
        width: '100%',
    },
});
Flex.displayName = 'Flex';

const StyledLink = styled(Link, props => {
    return {
        textAlign: 'center',
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

const SpanCopyright = styled('span', {
    color: '#999',
});
SpanCopyright.displayName = 'SpanCopyright';

export default () => (
  <Footer>
    <ToTop>
        <SpanArrow>
            <a aria-label='ページーの上へ戻る' href="#top"><Arrow></Arrow></a>
        </SpanArrow>
    </ToTop>
    <Padding>
        <Flex order='1'>
            <StyledLink aria-label='プロフィール・ページーへ移動する' to="/profile">プロフィール</StyledLink>
            <br></br>
            <StyledLink aria-label='ブログ・ページーへ移動する' to="/blog">ブログ</StyledLink>
        </Flex>
        <Flex order='2' $style={{ width: '60%' }}>
            <a aria-label='ページーの上へ戻る' href="#top"><MarkFooter></MarkFooter></a>
            <br></br>
            <SpanCopyright>2015 - 2020</SpanCopyright> <SpanCopyright $style={{ color: '#fff' }}>©</SpanCopyright>
            <StyledLink aria-label='使用条件・ページーへ移動する' to="/c-u"> all rights reserved</StyledLink>
        </Flex>
        
        <Flex order='3'>
            <StyledLink aria-label='ドックス・ページーへ移動する' to="/docs">ドックス</StyledLink>
            <br></br>
        </Flex>
    </Padding>
  </Footer>
)