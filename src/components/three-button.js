import React from 'react'
import { Link } from "gatsby"
import { styled } from 'styletron-react'
import THEME from "../theme"

const Layout = styled('div', {
    margin: '.85rem 0 1.7rem 0',
});
Layout.displayName = 'Layout';



const LeftContainer = styled('button', {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,.75)',
    borderRadius: '3px',
    margin: '2px 0 2px 4px',
    padding: '10px 8px 3px 8px',
    backgroundColor: 'rgba(0,0,0,.15)',
    transition: 'all 0.4s ease',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        paddingTop: '5px',
    },
    "@media screen and (max-width: 767px)": {
        paddingTop: '4px',
    },
    ":hover": {
        backgroundColor: 'rgba(255,255,255,.25)',
        cursor: 'pointer',
    },
});
LeftContainer.displayName = 'LeftContainer';

const CenterContainer = styled('button', {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,.75)',
    borderRadius: '3px',
    margin: '2px 3px 2px 3px',
    padding: '12px 12px 3px 12px',
    backgroundColor: 'rgba(0,0,0,.2)',
    transition: 'all 0.4s ease',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        paddingTop: '8px',
    },
    "@media screen and (max-width: 767px)": {
        paddingTop: '6px',
    },
    ":hover": {
        backgroundColor: 'rgba(255,255,255,.25)',
        cursor: 'pointer',
    },
});
CenterContainer.displayName = 'CenterContainer';

const RightContainer = styled('button', {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,.75)',
    borderRadius: '3px',
    margin: '2px 4px 2px 0',
    padding: '10px 8px 3px 8px',
    backgroundColor: 'rgba(0,0,0,.2)',
    transition: 'all 0.4s ease',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        paddingTop: '5px',
    },
    "@media screen and (max-width: 767px)": {
        paddingTop: '4px',
    },
    ":hover": {
        backgroundColor: 'rgba(255,255,255,.25)',
        cursor: 'pointer',
    },
});
RightContainer.displayName = 'RightContainer';



const SideRuby = styled('ruby', {
    display: 'inline-flex',
    flexDirection: 'column-reverse',
    color: 'rgba(255,255,255,.9)',
    fontFamily: THEME.fontFamily[1],
    fontSize: '22px',
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: '.1em',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        fontSize: '16px',
        letterSpacing: '.02em',
    },
    "@media screen and (max-width: 767px)": {
        fontSize: '14px',
        letterSpacing: '.03em',
    },
});
SideRuby.displayName = 'SideRuby';

const CenterRuby = styled('ruby', {
    display: 'inline-flex',
    flexDirection: 'column-reverse',
    color: 'rgba(255,255,255,.9)',
    fontFamily: THEME.fontFamily[1],
    fontSize: '33px',
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: '.1em',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        fontSize: '20px',
        letterSpacing: '.02em',
    },
    "@media screen and (max-width: 767px)": {
        fontSize: '18px', 
        letterSpacing: '.03em',       
    },
});
CenterRuby.displayName = 'CenterRuby';



const SideStyledAnchor = styled(Link, props => {
    return {
        textDecoration: 'none',
    }
});
SideStyledAnchor.displayName = 'SideStyledAnchor';

const CenterStyledAnchor = styled('a', {
    textDecoration: 'none',
});
CenterStyledAnchor.displayName = 'CenterStyledAnchor';



const SideRt = styled('rt', {
    display: 'inline',
    lineHeight: 1,
    fontWeight: 400,
    fontSize: '13.5px',
    letterSpacing: '.1em',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        fontSize: '12px',
        letterSpacing: '.02em',
    },
    "@media screen and (max-width: 767px)": {
        fontSize: '11px', 
        letterSpacing: '.03em',       
    },
});
SideRt.displayName = 'SideRt';

const CenterRt = styled('rt', {
    display: 'inline',
    lineHeight: 1,
    margin:0,
    fontWeight: 400,
    fontSize: '16.5px',
    letterSpacing: '.1em',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        fontSize: '15px',
        letterSpacing: '.02em',
    },
    "@media screen and (max-width: 767px)": {
        fontSize: '13px', 
        letterSpacing: '.03em',       
    },
});
CenterRt.displayName = 'CenterRt';


export default ({ data }) => (
    <Layout>
        <LeftContainer>
            <SideStyledAnchor to="/en">
                <SideRuby lang="en">
                    <span title="英語">english</span><SideRt lang="fr">anglais</SideRt>
                </SideRuby>
            </SideStyledAnchor>
        </LeftContainer>
        <CenterContainer >
            <CenterStyledAnchor href="#blog">
                <CenterRuby lang="ja">
                    <span title="japanese">日本語</span><CenterRt lang="fr">japonais</CenterRt>
                </CenterRuby>
            </CenterStyledAnchor>
        </CenterContainer>
        <RightContainer>
            <SideStyledAnchor to="/fr">
                <SideRuby lang="fr">
                    <span title="french">français</span><SideRt lang="ja">フランス語</SideRt>
                </SideRuby>
            </SideStyledAnchor>
        </RightContainer>
    </Layout>
)