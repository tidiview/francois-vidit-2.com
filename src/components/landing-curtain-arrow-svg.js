import React from 'react'
import { styled } from 'styletron-react'
import { ReactComponent as Star } from '../assets/landing-curtain-arrow.svg'

const Layout = styled('div', {
    textAlign: 'center',
    width: '42px',
    height: '64px',
    margin: 'auto',
});
Layout.displayName = 'Layout';

const App = () => (
    <Layout>
        <Star />
    </Layout>
)

export default App