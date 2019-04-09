import React from "react"
import { styled } from "styletron-react"
import { Provider } from "styletron-react"

const Button = styled("button", ({ $theme }) => ({
    backgroundColor: $theme.colors.primary[2],
    color: "#FFF",
    fontSize: $theme.sizing[4],
    padding: $theme.sizing[1]
    })
);
Button.displayName = "Button";

export default () => (
    <Provider>
        <Button>Button</Button>
    </Provider>
    
)
