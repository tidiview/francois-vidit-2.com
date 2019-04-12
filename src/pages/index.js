import React from "react"
import { Helmet } from "react-helmet"
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

export default class Application extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    feedback: "",
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
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}! ${this.state.feedback}`)

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env

    this.sendFeedback(
      template,
      this.props.senderEmail,
      receiverEmail,
      this.state.feedback)

    this.setState({
      formSubmitted: true
    })
  }

  sendFeedback (templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs.send(
      'mailgun',
      templateId,
      {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => {
        this.setState({ formEmailSent: true })
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }

  render() {
    return (
      <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Layout>
          <IndexText>Texte partie de Index.js</IndexText>
          <form onSubmit={this.handleSubmit}>
            <label>
              First name
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label>
              Last name
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                id="feedback-entry"
                name="feedback"
                placeholder="Enter your message here"
                value={this.state.feedback}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </Layout>
      </div>
    )
  }
}