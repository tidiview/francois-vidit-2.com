import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div style={{
    backgroundSize: 'none',
    overflowX:'hidden',
    backgroundPosition: 'none',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  }}>
    <Img fluid={data.file.childImageSharp.fluid}
      objectFit="none"
      objectPosition="none"
      overflowX='hidden'
      alt="" />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "landing-curtain-2240.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(srcSetBreakpoints: [ 280, 380, 480, 640, 700, 840, 1280, 1600, 1920 ]) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`