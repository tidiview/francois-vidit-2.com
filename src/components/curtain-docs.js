import React from 'react'
import { Link } from "gatsby"
import { styled } from 'styletron-react'
import DocsJa from '../components/svg-docs-section-docs-ja'

const Layout = styled('div', {
    width: '100%',
    padding: '6vh 0 2.1vh 0',
    backgroundColor: '#efc94d',
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
    <Link to="/docs">
      <Text1></Text1>
    </Link>
    <Link to="/docs">
      <DocsJa></DocsJa>
    </Link>
  </Layout>
)