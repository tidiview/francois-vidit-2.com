import React from 'react'
import { styled } from 'styletron-react'

const Layout = styled('div', {
    margin: '.85rem 0 1.7rem 0',
});
Layout.displayName = 'Layout';



const LeftContainer = styled('div', {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,.75)',
    borderRadius: '3px',
    margin: '2px 0 2px 4px',
    padding: '26px 8px 3px 8px',
    backgroundColor: 'rgba(0,0,0,.15)',
    transition: 'all 0.4s ease',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        paddingTop: '24px',
    },
    "@media screen and (max-width: 767px)": {
        paddingTop: '22px',
    },
    ":hover": {
        backgroundColor: 'rgba(255,255,255,.25)',
        cursor: 'pointer',
    },
});
LeftContainer.displayName = 'LeftContainer';

const CenterContainer = styled('div', {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,.75)',
    borderRadius: '3px',
    margin: '2px 3px 2px 3px',
    padding: '30px 12px 5px 12px',
    backgroundColor: 'rgba(0,0,0,.2)',
    transition: 'all 0.4s ease',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        paddingTop: '28px',
    },
    "@media screen and (max-width: 767px)": {
        paddingTop: '26px',
    },
    ":hover": {
        backgroundColor: 'rgba(255,255,255,.25)',
        cursor: 'pointer',
    },
});
CenterContainer.displayName = 'CenterContainer';

const RightContainer = styled('div', {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,.75)',
    borderRadius: '3px',
    margin: '2px 4px 2px 0',
    padding: '26px 8px 3px 8px',
    backgroundColor: 'rgba(0,0,0,.2)',
    transition: 'all 0.4s ease',
    "@media screen and (max-width: 959px) and (min-width: 768px)": {
        paddingTop: '23px',
    },
    "@media screen and (max-width: 767px)": {
        paddingTop: '22px',
    },
    ":hover": {
        backgroundColor: 'rgba(255,255,255,.25)',
        cursor: 'pointer',
    },
});
RightContainer.displayName = 'RightContainer';



const SideRuby = styled('ruby', {
    color: 'rgba(255,255,255,.9)',
    fontFamily: 'Meiryo',
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
    color: 'rgba(255,255,255,.9)',
    fontFamily: 'Meiryo',
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



const SideRt = styled('rt', {
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
            <SideRuby lang="en">
                <span title="英語">english</span><SideRt lang="fr">anglais</SideRt>
            </SideRuby>
        </LeftContainer>
        <CenterContainer>
            <CenterRuby lang="ja">
                <span title="japanese">日本語</span><CenterRt lang="fr">japonais</CenterRt>
            </CenterRuby>
        </CenterContainer>
        <RightContainer>
            <SideRuby lang="fr">
                <span title="french">français</span><SideRt lang="ja">フランス語</SideRt>
            </SideRuby>
        </RightContainer>
    </Layout>
)