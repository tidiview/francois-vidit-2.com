import React from "react"
import { styled, withStyle } from "styletron-react"
import styletron from "gatsby-plugin-styletron"

const fancyStyles = {
  ":hover": {
    backgroundColor: "papayawhip",
  },
  "@media (max-width: 768px)": {
    ":hover": {
      animationDuration: "3s",
      animationFillMode: "forwards",
      animationName: {
        "0%": {
          transform: "translate3d(0,0,0)",
        },
        to: {
          transform: "translate3d(100%,0,0)",
        },
      },
      willChange: "transform",
    },
    fontFamily: {
      fontStyle: "normal",
      fontWeight: "normal",
      src:
        "url(https://fonts.gstatic.com/s/inconsolata/v16/QldKNThLqRwH-OJ1UHjlKGlW5qhExfHwNJU.woff2) format(woff2)",
    },
    fontSize: "24px",
  },
  fontSize: "36px",
}

const divStyles = {
  border: "1px dashed #333",
}

const RedAnchor = styled("a", { color: "red" })
const FancyAnchor = withStyle(RedAnchor, { fontFamily: "cursive" })

export default () => {
  const css = styletron().css

  return (
    <div
      className={css({ backgroundColor: "#cff", ...divStyles, ...fancyStyles })}
    >
      <FancyAnchor>Hi!</FancyAnchor>
      <div className={css(fancyStyles)}>Cool huh?</div>
    </div>
  )
}