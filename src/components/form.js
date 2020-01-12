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

  resetFormState = () => {
    setTimeout(() => this.setState({ submitState: submitState.thanks }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      submitState: submitState.pending,
    })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state }),
    })
      .then(() =>
        this.setState(
          {
            submitState: submitState.thanks,
          },
          this.resetFormState
        )
      )
      .catch(error =>
        this.setState(
          {
            submitState: submitState.thanks,
          },
          this.resetFormState
        )
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

    if (this.state.submitState === submitState.thanks) {
      return (
        <div className="w-100 h-100 flex justify-center items-center flex-column abslute top-0 left-0 right-0 bottom-0">
          <p className="brand-blue mt2 mb2 fw7 f5 lh-copy ma0">
            Thanks for reaching out!
          </p>
          <p className="matrix-subtitle black-70">
            We will be in touch very soon.
          </p>
        </div>
      )
    }

    return this.props.children({
      handleSubmit,
      handleChange,
      state,
    })
  }
}

export default Form
