import React from 'react'
import Helmet from 'react-helmet'
import { styled } from 'styletron-react'

const Layout = styled('div');
Layout.displayName = 'Layout';

const Success = props => (
  <Layout>
    <Helmet>
        <title>Success Page</title>
        <meta name="description" content="Success Page" />
    </Helmet>
    <div>
        <h1>Success/Thank You Page</h1>
        <p>Thank you for contacting us!</p>
    </div>
  </Layout>
)

export default Success