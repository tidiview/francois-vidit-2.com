import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = (props) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/profile/">Go to page 2</Link>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(srcSetBreakpoints: [ 280, 380, 480, 640, 700, 840, 1280, 1600, 1920 ]) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "landing-curtain-2240.jpg" }) {
      ...fluidImage
    }
  }
`