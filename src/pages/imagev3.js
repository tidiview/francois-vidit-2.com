import React from 'react'
import { styled } from 'styletron-react'

const Layout = styled('div', {
    height: '100%'
});
Layout.displayName = 'Layout';

const MainImage = styled('div', {
    backgroundImage: 'url("landing-curtain-2240.jpg")',
    height: '100vh',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
});
MainImage.displayName = 'MainImage';

function Home({ children }) {
    return (
        <Layout>
            <MainImage>{ children }</MainImage>
            <p>This example creates a full page background image. Try to resize the browser window to see how it always will cover the full screen (when scrolled to top), and that it scales nicely on all screen sizes.</p>
        </Layout>
    );
}

export default Home;