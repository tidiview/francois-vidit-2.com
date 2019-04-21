import React from "react"
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider } from "styletron-react"
import "./src/pages/index.css"

const engine = new Styletron({
  hydrate: document.getElementsByClassName("_styletron_hydrate_")
});

export const wrapRootElement = ({ element }, options) => (
  <Provider value={engine}>{element}</Provider>
);