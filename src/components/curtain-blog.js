import React from 'react'
import { Link } from "gatsby"
import { styled } from 'styletron-react'
import MarkFooter from '../components/svg-blog-section-mark-footer'
import BlogJa from '../components/svg-blog-section-blog-ja'

const Layout = styled('section', {
  width: '100%',
  padding: '6vh 0 2.1vh 0',
  textAlign: 'center',
  backgroundColor: '#000',
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
});
Text2.displayName = 'Text2';

export default () => (
  <Layout id="curtain1">
    <StyledMarkFooter></StyledMarkFooter>
    <Text1>とは、</Text1>
    <Link to="/blog">
      <Text2></Text2>
    </Link>
    <Link to="/blog">
      <BlogJa></BlogJa>
    </Link>
  </Layout>
)