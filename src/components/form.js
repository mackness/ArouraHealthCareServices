import React from "react"
import Loader from "./loader"

const submitState = {
  initial: 0,
  pending: 1,
  success: 2,
  fail: 3,
}

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      submitState: submitState.initial,
    }
  }

  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      submitState: submitState.pending,
    })
    fetch("https://laughing-kowalevski-147cc4.netlify.com/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state }),
    })
      .then(() =>
        this.setState({
          submitState: submitState.success,
        })
      )
      .catch(error =>
        this.setState({
          submitState: submitState.error,
        })
      )
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { handleSubmit, handleChange, state } = this

    if (this.state.submitState === submitState.pending) {
      return <Loader />
    }

    return this.props.children({
      handleSubmit,
      handleChange,
      state,
    })
  }
}

export default Form
