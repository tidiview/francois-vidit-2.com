import React from "react"
import { Wrapper } from "./src/components/wrapper"

// Pass all props (hence the ...props) to the wrapper component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <Wrapper {...props}>{element}</Wrapper>
)

export default wrapPageElement