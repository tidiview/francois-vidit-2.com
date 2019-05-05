import React from 'react'
import { graphql } from 'gatsby'
import { styled } from 'styletron-react'
import Img from 'gatsby-image'
import Header from '../components/header'
import CurtainMeta from '../components/curtain-meta'
import CurtainBlog from '../components/curtain-blog'
import CurtainDocs from '../components/curtain-docs'
import CurtainProfile from '../components/curtain-profile'
import CurtainAffectation from '../components/curtain-affectation'
import CurtainForm from '../components/curtain-form'

const Layout = styled('div', {
  height: '100%',
});
Layout.displayName = 'Layout';

export default ({ data }) => (
  <Layout>
    <Header></Header>
    <Img style={{ height: '100vh' }} fluid={{ ...data.file.childImageSharp.fluid, sizes:'(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86w' }} alt="" />
    <CurtainMeta></CurtainMeta>
    <CurtainBlog></CurtainBlog>
    <CurtainDocs></CurtainDocs>
    <CurtainProfile></CurtainProfile>
    <CurtainAffectation></CurtainAffectation>
    <CurtainForm></CurtainForm>
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