import React from "react"
import Form from "./form"

export default function NewsletterForm() {
  return (
    <Form
      message={{
        title: "Thanks for the signup!",
        subtitle: "Keep an eye out for emails from us.",
      }}
    >
      {({ state, handleChange, handleSubmit }) => {
        return (
          <div>
            <form class="mw7 center br2-ns ma0">
              <fieldset class="cf bn ma0 pa0">
                <h4 class="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
                  Sign up for our newsletter!
                </h4>
                <div class="cf">
                  <label htmlFor="email" className="f6 b db mb2">
                    E-mail <span className="normal black-60">(required)</span>
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
                  <button
                    className="button f6 no-underline grow dib v-mid white ba ph3 pv2 mb3 w-100 tc mt3 mb0"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        )
      }}
    </Form>
  )
}
