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
    fontSize: '1.25rem',
    margin: '.85rem 0 1.7rem 0',
    color: '#fff',
    fontWeight: 400,
    textAlign: 'center',
});
H4.displayName = 'H4';

const Text2 = styled('p', {
  margin: '.3rem auto',
  textAlign: 'center',
  color: '#fff',
});
Text2.displayName = 'Text2';

export default () => (
  <Layout id='contact'>
      <H4>お問い合わせ</H4>
      <Text2>問い合わせるには、以下のフォームをご記入を：</Text2>
      <Contact></Contact>
  </Layout>
)