import React from 'react'
import { styled } from 'styletron-react'
import Contact from '../components/contact'

const Layout = styled('div', {
    width: '100%',
    padding: '6vh 0 2.1vh 0',
    backgroundColor: '#666',
});
Layout.displayName = 'Layout';

const Text1 = styled('p', {
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
Text1.displayName = 'Text1';

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
  <Layout>
      <Text1></Text1>
      <H4>お問い合わせ</H4>
      <Text2>問い合わせるには、以下のフォームを御記入を：</Text2>
      <Contact></Contact>
  </Layout>
)