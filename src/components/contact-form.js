import React from "react"
import Form from "./form"
import TextAreaInput from "./TextAreaInput"
import CheckboxInput from "./CheckboxInput"
import TextInput from "./TextInput"

import "./contact-form.css"

export default function ContactForm() {
  return (
    <Form>
      {({ state, handleChange, handleSubmit, handleCheckBoxChange }) => {
        return (
          <div className="sans-serif">
            <h4 className="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
              Reach out to us!
            </h4>
            <small id="name-desc" className="f6 black-60 db mb2">
              And we will get back to you as soon as we can!
            </small>
            <form
              className="black-80 mb0"
              onSubmit={handleSubmit}
              data-netlify="true"
              name="contact-page-contact-from"
              data-netlify-honeypot="bot-field"
            >
              <TextInput
                isRequired
                name="firstName"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="First Name"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.firstName || ""}
              />

              <TextInput
                isRequired
                name="lastName"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Last name"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.lastName || ""}
              />

              <TextInput
                isRequired
                name="email"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="E-mail"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.email || ""}
              />

              <TextAreaInput
                name="message"
                label="A breif message"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                onChange={handleChange}
                value={state.message || ""}
                minHeight={350}
                type="text"
              />

              <CheckboxInput
                name="newsletterCheckbox"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Sign up for our newsletter"
                onClick={handleCheckBoxChange}
                value={state.newsLetterCheckbox || ""}
                style={{ WebkitAppearance: "checkbox", width: "auto" }}
              />

              <button
                className="button f6 no-underline grow dib v-mid white ba ph3 pv2 mb3 w-100 tc mt3 mb0"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )
      }}
    </Form>
  )
}
