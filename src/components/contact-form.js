import React from "react"

export default function ContactForm() {
  return (
    <div className="sans-serif">
      <h4 className="blue sans-serif mt2 mb2 fw7 f5 lh-copy ma0">
        Reach out to us!
      </h4>
      <small id="name-desc" className="f6 black-60 db mb2">
        And we will get back to you as soon as we can!
      </small>
      <form className="black-80 mb0">
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            Name <span className="normal black-60">(optional)</span>
          </label>
          <input
            id="name"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
          />
        </div>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            Phone number <span className="normal black-60">(optional)</span>
          </label>
          <input
            id="name"
            type="tel"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="tel-desc"
          />
        </div>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            E-mail <span className="normal black-60">(optional)</span>
          </label>
          <input
            id="name"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="email-desc"
          />
        </div>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            A breif message <span className="normal black-60">(optional)</span>
          </label>
          <textarea
            id="name"
            min-height="250px"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="message-desc"
          />
        </div>
        <a
          className="button f6 no-underline grow dib v-mid white ba ph3 pv2 mb3 w-100 tc mt3"
          href="/"
        >
          Submit
        </a>
      </form>
    </div>
  )
}
