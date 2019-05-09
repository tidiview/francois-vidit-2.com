import React from "react"
import { styled } from "styletron-react"


const Layout = styled('div', {
    width: '100%',
    height: '100vh',
    padding: 0,
    margin: 0,
    backgroundColor: '#999',
});
Layout.displayName = 'Layout';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false };
    }
    render() {
        const Button = styled("button", props => ({
            padding: "0.5em 1em",
            color: props.$isActive ? "#fff" : "#000",
            backgroundColor: props.$isActive ? "blue" : "none",
            fontSize: "1em",
            borderRadius: "4px",
            border: "1px solid #aaa",
            ":hover": {
              backgroundColor: props.$isActive ? "green" : "yellow"
            },
        }));
        Button.displayName = "Button";

        const Anchor = styled('a', props => ({
            display: props.$isActive ? 'block' : 'none',
            color: props.$isActive ? '#fff' : '#000',
        }));
        Anchor.displayName = 'Anchor';

        const { isActive } = this.state;

        return (
            <Layout>                
                <Button
                    $isActive={isActive}
                    onClick={() => {
                    this.setState(prev => ({ isActive: !prev.isActive }));
                    }}>
                    It is {isActive ? "on" : "off"}!
                </Button>
                <Anchor
                    $isActive={isActive} 
                    href='#'>{isActive ? "on" : "off"}!</Anchor>
            </Layout>
        );
    }
}

function Home() {
    return <MyApp></MyApp>
}

export default Home;