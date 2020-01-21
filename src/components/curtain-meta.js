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
    zIndex: 1,
    textAlign: 'center',
    "@media screen and (max-width: 767px)": {
        left: '4px',
        right: '4px',
        bottom: '25px',
    },
});
Layout.displayName = 'Layout';
    
const Anchor = styled('a');
Anchor.displayName = 'Anchor';

export default ({ data }) => (
    <Layout>
        <DivSvg></DivSvg>
        <Buttons></Buttons>
        <Anchor aria-label='ブログ・セクションへ移動する' href='#blog'>
            <Arrow></Arrow>
        </Anchor>
    </Layout>
)