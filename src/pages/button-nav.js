import React from "react"
import { styled } from "styletron-react"
import ThreeBarsMenu from '../components/three-bars-menu'
import CloseButton from '../components/close-button'
import THEME from "../theme"

const Layout = styled('div');
Layout.displayName = 'Layout';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false };
    }
    render() {
        const Button = styled("button", props => ({
            display: props.$isActive ? 'none' : 'initial',
            position: 'fixed',
            top: 0,
            right: 0,
            backgroundColor: 'rgba(255,255,255,0)',
            border: 'none',
            color: '#fff',
            paddingTop: '10px',
            ":hover": {
                borderRadius: '3px',
                backgroundColor: 'rgba(255,255,255,0.25)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
            },
        }));
        Button.displayName = "Button";

        const OverlayDiv = styled('div', props => ({
            display: props.$isActive ? 'block' : 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0, 0.9)',
        }));
        OverlayDiv.displayName = 'OverlayDiv';

        const OverlayClose = styled('button', props => ({
            display: props.$isActive ? 'block' : 'none',
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 2,
            backgroundColor: 'rgba(255,255,255,0)',
            border: 'none',
            color: '#fff',
            paddingTop: '10px',
            ":hover": {
                borderRadius: '3px',
                backgroundColor: 'rgba(255,255,255,.45)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
            },
        }));
        OverlayClose.displayName = 'OverlayClose';

        const OverlayContent = styled('div', props => ({
            display: props.$isActive ? 'block' : 'none',
            position: 'relative',
            top: '10%',
            backgroundColor: 'inherit',
        }));
        OverlayContent.displayName = 'OverlayContent';

        const OverlayUnit = styled('div', props => ({
            display: props.$isActive ? 'none' : 'block',
            width: '25%',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#818181',
            backgroundColor: 'inherit',
            fontSize: '36px',
            fontFamily: THEME.fontFamily[0],
            paddingLeft: '5%',
            ':hover': {
                backgroundColor: '#818181',
                color: 'rgba(0,0,0, 0.9)',
            },
            "@media screen and (max-width: 959px) and (min-width: 768px)": {
                width: '60%',
            },
            "@media screen and (max-width: 767px)": {
                width: '90%',  
            },
        }));
        OverlayUnit.displayName = 'OverlayUnit';

        const OverlayAnchor = styled('a', props => ({
            display: props.$isActive ? 'none' : 'inline',
            textDecoration: 'none',
            color: 'inherit',
        }));
        OverlayAnchor.displayName = 'OverlayAnchor';

        const { isActive } = this.state;

        return (
            <Layout>                
                <Button
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
                        <OverlayAnchor href="#">
                            <OverlayUnit>about</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>services</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>clients</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>contact</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>about</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>services</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>clients</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>contact</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>about</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>services</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>clients</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>contact</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>about</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>services</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>clients</OverlayUnit>
                        </OverlayAnchor>
                        <OverlayAnchor href="#">
                            <OverlayUnit>contact</OverlayUnit>
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