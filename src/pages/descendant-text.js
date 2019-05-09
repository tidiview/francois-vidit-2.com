import React from "react"
import { styled } from "styletron-react"

const Layout = styled('div', {
    padding: '5vh .938rem 10vh',
});
Layout.displayName = 'Layout';

function Home() {
    // createContext should be module scoped
    // and imported by Parent and Child
    const ParentContext = React.createContext();
  
    const Parent = ({ children }) => {
      const { Provider } = ParentContext;
      return <Provider value="blue">{children}</Provider>;
    };
  
    const Child = () => {
      const Text = styled("div", props => ({
        color: props.$color
      }));
      const value = React.useContext(ParentContext) || "black";
      return <Text $color={value}>This text is {value}.</Text>;
    };
  
    return (
        <Layout>
            <Parent>
                <Child />
            </Parent>
            <Child />
        </Layout>
    );
  };

  export default Home;