import React from 'react'
import { Link } from "gatsby"
import { styled } from 'styletron-react'
import ProfileJa from '../components/svg-profile-section-profile-ja'

const Layout = styled('section', {
    width: '100%',
    padding: '1.5vh 0 2.1vh 0',
    textAlign: 'center',
    backgroundColor: '#B7E2E6',
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

export default () => (
  <Layout>
    <Link to="/profile">
        <Text1></Text1>
    </Link>
    <Link to="/profile">
        <ProfileJa></ProfileJa>
    </Link>
  </Layout>
)