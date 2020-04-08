import React from 'react'
import { styled } from 'styletron-react'
import Contact from '../components/contact'

const Layout = styled('section', {
    paddingTop: '5vh',
    paddingRight: '0.8rem',
    paddingBottom: '20rem',
    paddingLeft: '0.8rem',
    backgroundColor: '#666',
    '@media screen and (max-width: 959px) and (min-width: 768px)': {
      paddingBottom: '17rem',
      paddingRight: '10px',
      paddingLeft: '10px', 
    },
    '@media screen and (max-width: 767px)': {
      paddingBottom: '14rem',
      paddingRight: '6px',
      paddingLeft: '6px', 
    },
});
Layout.displayName = 'Layout';

const H4 = styled('h4', {
  fontSize: '1.3rem',
  marginTop: 'calc(0.85rem + 6.75vh)',
  marginRight: 'auto',
  marginBottom: '0.5rem',
  marginLeft: 'auto',
  color: 'white',
  fontFamily: 'Yu Gothic Medium, sans-serif',
  wordBreak: 'keep-all',
  fontWeight: 400,
  textAlign: 'center',
  lineHeight: '6.75vh',
  height: '7vh',
});
H4.displayName = 'H4';

const Text2 = styled('p', {
  margin: '0.3rem auto',
  textAlign: 'center',
  color: 'white',
  fontFamily: 'Yu Gothic Medium, sans-serif',
  wordBreak: 'keep-all',
  lineHeight: '2',
});
Text2.displayName = 'Text2';

export default () => (
  <Layout id='contact'>
      <H4>お問い合わせ</H4>
      <Text2>問い合わせるには、<wbr/>以下のフォームをご記入を：</Text2>
      <Contact></Contact>
  </Layout>
)