import React from 'react'
import { styled } from 'styletron-react'
import ThreeBarsMenu from '../components/three-bars-menu'
import CloseButton from '../components/close-button'
import TwitterSquare from '../components/twitter-square'
import GithubSquare from '../components/github-square'
import THEME from '../theme'

const Layout = styled('div', ({
    height: '100%',
}));
Layout.displayName = 'Layout';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false };
    }
    render() {const Button = styled('button', props => ({
            display: 'none',
            position: 'initial',
            backgroundColor: 'rgba(255,255,255,0)',
            border: 'none',
            color: '#fff',
            float: 'right',
            paddingTop: '5px',
            paddingRight: '7px',
            paddingBottom: '2px',
            paddingLeft: '7px',
            ':hover': {
                borderRadius: '3px',
                backgroundColor: 'rgba(255,255,255,0.25)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
            },
            '@media screen and (max-width: 959px) and (min-width: 768px)': {
                display: props.$isActive ? 'none' : 'initial',
            },
            '@media screen and (max-width: 767px)': {
                display: props.$isActive ? 'none' : 'initial',
            },
        }));
        Button.displayName = 'Button';

        const OverlayClose = styled('button', props => ({
            display: props.$isActive ? 'block' : 'none',
            position: 'fixed',
            top: '1em',
            right: '15rem',
            zIndex: 4,
            backgroundColor: 'rgba(255,255,255,0)',
            border: 'none',
            color: '#fff',
            paddingTop: '6px',
            paddingRight: '7px',
            paddingBottom: '5px',
            paddingLeft: '7px',
            ':hover': {
                borderRadius: '3px',
                backgroundColor: 'rgba(255,255,255,.45)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
            },
            '@media screen and (max-width: 959px) and (min-width: 768px)': {
                right: '5rem',
            },
            '@media screen and (max-width: 767px)': {
                right: '.5rem',
            },
        }));
        OverlayClose.displayName = 'OverlayClose';

        const OverlayDiv = styled('div', props => ({
            display: props.$isActive ? 'block' : 'none',
            position: 'absolute',
            width: '100vw',
            minHeight: '900vh',
            zIndex: 3,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0, 1)',
            backgroundSize: 'cover',
        }));
        OverlayDiv.displayName = 'OverlayDiv';

        const OverlayContent = styled('div', props => ({
            display: props.$isActive ? 'block' : 'none',
            zIndex: 3,
            position: 'relative',
            paddingTop: '15%',
            backgroundColor: 'inherit',
        }));
        OverlayContent.displayName = 'OverlayContent';

        const OverlayUnit = styled('div', props => ({
            display: props.$isActive ? 'none' : 'block',
            width: '25%',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: props.$highlight ? '#000' : '#818181',
            backgroundColor: props.$highlight ? '#d9d9d9' : 'inherit',
            fontSize: '36px',
            marginTop: '10px',
            marginBottom: '10px',
            fontFamily: THEME.fontFamily[0],
            paddingLeft: '5%',
            ':hover': {
                backgroundColor: props.$highlight ? '#fff' : '#818181',
                color: props.$highlight ? '#000' : '#fff',
            },
            '@media screen and (max-width: 959px) and (min-width: 768px)': {
                width: '60%',
                fontSize: '32px',
            },
            '@media screen and (max-width: 767px)': {
                width: '90%',
                fontSize: '22px',
                marginTop: '14px',
                marginBottom: '14px',
                paddingTop: '14px',
                paddingBottom: '14px',
            },
        }));
        OverlayUnit.displayName = 'OverlayUnit';

        const OverlayAnchor = styled('a', props => ({
            display: props.$isActive ? 'none' : 'inline',
            textDecoration: 'none',
            color: 'inherit',
        }));
        OverlayAnchor.displayName = 'OverlayAnchor';

        const OverlayIcon = styled('div', props => ({
            display: props.$isActive ? 'none' : 'inline-block',
            verticalAlign: 'middle',
            height: '30px',
        }));
        OverlayIcon.displayName = 'OverlayIcon';

        const { isActive } = this.state;

        return (
            <Layout
                $isActive={isActive}>                
                <Button aria-label='クローズ・ボタン'
                    $isActive={isActive}
                    onClick={() => {
                        this.setState(prev => ({ isActive: !prev.isActive }));
                    }}>
                    <ThreeBarsMenu></ThreeBarsMenu>
                </Button>
                <OverlayDiv
                    $isActive={isActive}>
                    <OverlayClose
                        $isActive={isActive}
                        onClick={() => {
                            this.setState(prev => ({ isActive: !prev.isActive }));
                        }}>
                        <CloseButton></CloseButton>
                    </OverlayClose>
                    <OverlayContent
                        $isActive={isActive}>
                        <OverlayAnchor
                            onClick={() => {
                                this.setState(prev => ({ isActive: !prev.isActive }));
                        }}>
                            <OverlayUnit $highlight>ホ－ム</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='使用条件のページーへ行く' href='/c-u'>
                            <OverlayUnit>使用条件</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='公開鍵のページーへ行く' href='/crypto'>
                            <OverlayUnit>公開鍵</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='ブログのページーへ行く' href='/blog'>
                            <OverlayUnit>ブログ</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='ドックスのページーへ行く' href='/docs'>
                            <OverlayUnit>ドックス</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='プロフィールのページーへ行く' href='/profile'>
                            <OverlayUnit>プロフィール</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='ツイッターのページーへ行く' href='https://twitter.com/@bf7afa37fa94ja'>
                            <OverlayUnit>
                                <OverlayIcon>
                                    <TwitterSquare></TwitterSquare>
                                </OverlayIcon>
                            </OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='ギットハブのページーへ行く' href='https://github.com/tidiview/francois-vidit.com'>
                            <OverlayUnit>
                                <OverlayIcon>
                                    <GithubSquare></GithubSquare>
                                </OverlayIcon>
                            </OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor
                            onClick={() => {
                                this.setState(prev => ({ isActive: !prev.isActive }));
                        }}>
                            <OverlayUnit $highlight>日本語</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='フランス語のページーへ行く' href='/fr'>
                            <OverlayUnit>français</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor aria-label='英語のページーへ行く' href='/en'>
                            <OverlayUnit>english</OverlayUnit>
                        </OverlayAnchor>
                    </OverlayContent>
                </OverlayDiv>
            </Layout>
        );
    }
}

function Home() {
    return <MyApp></MyApp>
}

export default Home;