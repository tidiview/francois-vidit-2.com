import React from 'react'
import { styled } from 'styletron-react'
import CurtainMeta from '../components/curtain-meta'

const CurtainImg = styled('div', {
  height: '100vh', 
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'url("./landing-curtain-1600.jpg")',
});
CurtainImg.displayName = 'CurtainImg';

export default () => (
    <CurtainImg>
        <CurtainMeta></CurtainMeta>
    </CurtainImg>
)