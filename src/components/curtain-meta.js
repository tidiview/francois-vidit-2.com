import React from 'react'
import { styled } from 'styletron-react'
import DivSvg from '../components/landing-curtain-photo-svg'
import Buttons from '../components/three-button'
import Arrow from '../components/landing-curtain-arrow-svg'

const Layout = styled('div', {
    margin: '.85rem 0 0 0',
    left: '30%',
    right: '30%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    position: 'absolute',
    bottom: '80px',
    zIndex: 11,
    textAlign: 'center',
    "@media screen and (max-width: 767px)": {
        left: '4px',
        right: '4px',
        bottom: '25px',
    },
});
Layout.displayName = 'Layout';

export default ({ data }) => (
    <Layout>
        <DivSvg></DivSvg>
        <Buttons></Buttons>
        <Arrow></Arrow>
    </Layout>
)