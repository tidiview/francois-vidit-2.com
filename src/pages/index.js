import React from 'react'
import Header from '../components/header'
import CurtainLanding from '../components/curtain-landing'
import CurtainBlog from '../components/curtain-blog'
import CurtainDocs from '../components/curtain-docs'
import CurtainProfile from '../components/curtain-profile'
import CurtainAffectation from '../components/curtain-affectation'
import CurtainForm from '../components/curtain-form'
import Footer from '../components/footer'

export default () => (
  <>
    <Header id="top"></Header>
    <CurtainLanding></CurtainLanding>
    <CurtainBlog></CurtainBlog>
    <CurtainDocs></CurtainDocs>
    <CurtainProfile></CurtainProfile>
    <CurtainAffectation></CurtainAffectation>
    <CurtainForm></CurtainForm>
    <Footer></Footer>
  </>
)