import React from 'react'
import { styled } from 'styletron-react'
import { ReactComponent as Star } from '../assets/landing-curtain-photo-opt.svg'
import { ReactComponent as Star2 } from '../assets/landing-curtain-bienvenue-ja-svg.svg'

const DIVSVG = styled('div', {
    display: 'inline-block',
    height: '180px',
    width: '180px',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        height: '130px',
        width: '130px',
    },
    "@media screen and (max-width: 767px)": {
        height: '100px',
        width: '25vw',
        left: '4px',
        right: '4px',
        bottom: '60px',
    },
});
DIVSVG.displayName = 'DIVSVG';

const H1 = styled('h1', {
    display: 'inline-block',
    margin: '0',
});
H1.displayName = 'H1';

const H1svg = styled('div', {
    display: 'inline-block',
    width: '414px',
    height: '180px',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        height: '299px',
        width: '35vw',
    },
    "@media screen and (max-width: 767px)": {
        height: '230px',
        width: '50vw',
    }
});
H1svg.displayName = 'H1svg';

const PhotoPlusTexte = styled('div');
PhotoPlusTexte.displayName = 'PhotoPlusTexte';

const App = () => (
    <PhotoPlusTexte>
        <DIVSVG>
            <Star />
        </DIVSVG>
        <H1 title="☆ ようこそ、私のホームページーに！">
            <H1svg>
                <Star2 />
            </H1svg>
        </H1>
    </PhotoPlusTexte>
)

export default App