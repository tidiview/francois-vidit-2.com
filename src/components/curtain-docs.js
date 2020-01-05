import React from 'react'
import { Link } from 'gatsby'
import { styled } from 'styletron-react'
import DocsJa from '../components/svg-docs-section-docs-ja'

const Layout = styled('section', {
    paddingTop: '1.5vh',
    paddingRight: '0.8rem',
    paddingBottom: '2.1vh',
    paddingLeft: '0.8rem',
    textAlign: 'center',
    backgroundColor: '#efc94d',
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

const Text1 = styled('p', {
  maxWidth: '7vh',
  height: '7vh',
  lineHeight: '6.75vh',
  marginTop: '6vh',
  marginRight: 'auto',
  marginBottom: '0',
  marginLeft: 'auto',
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
Text1.displayName = 'Text1';

export default () => (
  <Layout id='docs'>
    <Link to='/docs'>
      <Text1></Text1>
    </Link>
    <Link to='/docs'>
      <DocsJa></DocsJa>
    </Link>
  </Layout>
)