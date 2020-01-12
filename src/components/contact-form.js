import React from "react"
import Form from "./form"

export default function ContactForm() {
  return (
    <Form>
      {({ state, handleChange, handleSubmit }) => {
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
              name="homepage-contact-from"
              data-netlify-honeypot="bot-field"
            >
              <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">
                  Name <span className="normal black-60">(optional)</span>
                </label>
                <input
                  id="name"
                  name="name"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  onChange={handleChange}
                  value={state.name || ""}
                  aria-describedby="name-desc"
                />
              </div>
              <div className="measure">
                <label htmlFor="telephone" className="f6 b db mb2">
                  Phone number{" "}
                  <span className="normal black-60">(optional)</span>
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  onChange={handleChange}
                  value={state.telephone || ""}
                  aria-describedby="tel-desc"
                />
              </div>
              <div className="measure">
                <label htmlFor="email" className="f6 b db mb2">
                  E-mail <span className="normal black-60">(optional)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  onChange={handleChange}
                  value={state.email || ""}
                  aria-describedby="email-desc"
                />
              </div>
              <div className="measure">
                <label htmlFor="message" className="f6 b db mb2">
                  A breif message{" "}
                  <span className="normal black-60">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={state.message || ""}
                  min-height="250px"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="message-desc"
                />
              </div>
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
