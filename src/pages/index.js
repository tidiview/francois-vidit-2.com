import React from "react"
import { styled } from "styletron-react"
import Layout from "../components/layout"

const IndexText = styled("p", { 
  fontStyle: "IndexText", 
  color: "green",
  fontFamily: "Meiryo",
  ":hover": {
    color: "purple"
  }
});
IndexText.displayName = "IndexText";

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return (
      <Layout>
        <IndexText>Texte partie de Index.js</IndexText>
        <form onSubmit={this.handleSubmit}>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Layout>
    )
  }
}