import React from 'react'
import { styled } from 'styletron-react'
import { ReactComponent as Star } from '../assets/logo-header-ja.svg'

const DivSvg = styled('div', {
    marginBlockStart: '1em',
    paddingLeft: '15rem',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        paddingLeft: '5rem'
    },
    "@media screen and (max-width: 767px)": {
        paddingLeft: '.5rem'
    },
});
DivSvg.displayName = 'DivSvg';

const App = () => (
    <DivSvg>
        <Star />
    </DivSvg>
)

export default App