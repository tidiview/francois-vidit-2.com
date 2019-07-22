import React from 'react'
import { styled } from 'styletron-react'
import Header from '../components/header'
import CurtainLanding from '../components/curtain-landing'
import CurtainBlog from '../components/curtain-blog'
import CurtainDocs from '../components/curtain-docs'
import CurtainProfile from '../components/curtain-profile'
import CurtainAffectation from '../components/curtain-affectation'
import CurtainForm from '../components/curtain-form'
import Footer from '../components/footer'

const Layout = styled('div', {
  height: '100%',
});
Layout.displayName = 'Layout';

export default () => (
  <Layout id="top">
    <Header></Header>
    <CurtainLanding></CurtainLanding>
    <CurtainBlog></CurtainBlog>
    <CurtainDocs></CurtainDocs>
    <CurtainProfile></CurtainProfile>
    <CurtainAffectation></CurtainAffectation>
    <CurtainForm></CurtainForm>
    <Footer></Footer>
  </Layout>
)