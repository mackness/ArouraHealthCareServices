import React from "react"
import get from "lodash/get"
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
    // return Object.keys(data)
    //   .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    //   .join("&")
    const formData = new FormData()

    for (const key of Object.keys(data)) {
      formData.append(key, data[key])
    }

    return formData
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
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        ["form-name"]: event.target.getAttribute("name"),
        ...this.state,
      }),
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

  handleAttachment = event => {
    this.setState({ [event.target.name]: event.target.files[0] })
  }

  render() {
    const { handleSubmit, handleChange, handleAttachment, state } = this

    if (this.state.submitState === submitState.pending) {
      return <Loader />
    }

    if (this.state.submitState === submitState.thanks) {
      return (
        <div className="w-100 h-100 flex justify-center items-center flex-column absolute absolute--fill">
          <p
            className="brand-blue mt2 mb2 fw7 f5 lh-copy ma0"
            style={
              get(this, "props.message.color")
                ? { color: this.props.message.color }
                : {}
            }
          >
            {this.props.message
              ? this.props.message.title
              : `Thanks for reaching out!`}
          </p>
          <p
            className="matrix-subtitle black-70"
            style={
              get(this, "props.message.color")
                ? { color: this.props.message.color }
                : {}
            }
          >
            {this.props.message
              ? this.props.message.subtitle
              : `We will be in touch very soon.`}
          </p>
        </div>
      )
    }

    return this.props.children({
      handleSubmit,
      handleChange,
      handleAttachment,
      state,
    })
  }
}

export default Form
