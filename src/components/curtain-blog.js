import React from 'react'
import { Link } from 'gatsby'
import { styled } from 'styletron-react'
import MarkFooter from '../components/svg-blog-section-mark-footer'
import BlogJa from '../components/svg-blog-section-blog-ja'

const Layout = styled('section', {
  paddingTop: '6vh',
  paddingRight: '0.8rem',
  paddingBottom: '2.1vh',
  paddingLeft: '0.8rem',
  textAlign: 'center',
  backgroundColor: '#000',
  '@media screen and (max-width: 959px) and (min-width: 768px)': {
    paddingRight: '10px',
    paddingLeft: '10px', 
  },
  '@media screen and (max-width: 767px)': {
    paddingRight: '6px',
    paddingLeft: '6px',
  }
});
Layout.displayName = 'Layout';

const StyledMarkFooter = styled(MarkFooter, props => {
  return {
      style: 'max-height: 6vh;max-width: 85vw;padding-top: 1vh;padding-bottom: 1vh;margin: 1vh auto 0;box-sizing: border-box;',
  }
});
StyledMarkFooter.displayName = 'StyledMarkFooter';

const Text1 = styled('p', {
  minWidth: '15vw',
  maxWidth: '25vw',
  minHeight: '3vh',
  maxHeight: '5vh',
  lineHeight: '5vh',
  margin: '3vh auto 2vh auto',
  textAlign: 'center',
  fontFamily: 'Yu Gothic Medium, sans-serif',
  fontSize: '4vh',
  color: '#e7e7e8',
  '@media screen and (max-width: 959px) and (min-width: 768px)': {
    fontSize: '3.3vh',
  },
  '@media screen and (max-width: 767px)': {
    fontSize: '2.8vh',
  }
});
Text1.displayName = 'Text1';

const Text2 = styled('p', {
  maxWidth: '7vh',
  height: '7vh',
  lineHeight: '6.75vh',
  margin: '6vh auto 0',
  fontSize: '4vh',
  textAlign: 'center',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: 'crimson',
  '@media screen and (max-width: 959px) and (min-width: 768px)': {
    marginTop: '6.3vh',
    maxWidth: '6.2vh',
    height: '6.2vh',
  },
  '@media screen and (max-width: 767px)': {
    marginTop: '6vh',
    maxWidth: '5.5vh',
    height: '5.5vh',
  }
});
Text2.displayName = 'Text2';

export default () => (
  <Layout id='blog'>
    <StyledMarkFooter></StyledMarkFooter>
    <Text1>とは、</Text1>
    <Link aria-label='ブログ・ページーへ移動する' to='/blog'>
      <Text2></Text2>
    </Link>
    <Link aria-label='ブログ・ページーへ移動する' to='/blog'>
      <BlogJa></BlogJa>
    </Link>
  </Layout>
)