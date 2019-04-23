import React from 'react'
import { graphql } from 'gatsby'
import { styled } from 'styletron-react'
import Img from 'gatsby-image'
import Header from '../components/header'
import CurtainMeta from '../components/curtain-meta'

const Layout = styled('div', {
  height: '100%'
});
Layout.displayName = 'Layout';

export default ({ data }) => (
  <Layout>
    <Header></Header>
    <Img style={{ height: '100vh' }} fluid={{ ...data.file.childImageSharp.fluid, sizes:'(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86w' }} alt="" />
    <CurtainMeta></CurtainMeta>
    <p>This example creates a full page background image. Try to resize the browser window to see how it always will cover the full screen (when scrolled to top), and that it scales nicely on all screen sizes.</p>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/landing-curtain-2240.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(srcSetBreakpoints: [ 280, 380, 480, 640, 700, 840, 1280, 1600 ]) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`