import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import CurtainMeta from '../components/curtain-meta'

export default () => (
  <>
    <StaticQuery
      query={graphql`
        query ImageQuery {
          file(relativePath: { eq: "images/landing-curtain-2240.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => (
        <Img style={{ height:'100vh' }} imgStyle={{ objectPosition:'left' }} fluid={data.file.childImageSharp.fluid} />
      )}
    />
    <CurtainMeta></CurtainMeta>
  </>
)