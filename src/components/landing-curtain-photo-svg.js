import React from 'react'
import { styled } from 'styletron-react'
import { ReactComponent as Star } from '../assets/landing-curtain-photo-opt.svg'

const DivSvg = styled('div', {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '110px',
    paddingBottom: '10px',
    left: '30%',
    right: '30%',
    position: 'absolute',
    bottom: '80px',
    zIndex: 9,
    height: '180px',
    width: '180px',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        height: '130px',
        width: '130px',
    },
    "@media screen and (max-width: 767px)": {
        height: '100px',
        width: '100px',
        left: '4px',
        right: '4px',
        bottom: '60px',
    },
});
DivSvg.displayName = 'DivSvg';

const App = () => (
    <DivSvg>
        <Star />
    </DivSvg>
)

export default App