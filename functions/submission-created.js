require("dotenv").config()
const _ = require("lodash")
const { homePageContactForm, newsletterSignupForm } = require("./handlers")
const { decodePayload } = require("./helpers")

const forms = {
  HOMEPAGE_CONTACT_FORM: "homepage-contact-from",
  NEWSLETTER_SIGNUP_FORM: "newsletter-signup-form",
}

exports.handler = function(event, context, callback) {
  console.log({ event })
  console.log({ context })

  const body = decodePayload(event.body)

  switch (_.get(body, "payload.form_name")) {
    case forms.HOMEPAGE_CONTACT_FORM:
      homePageContactForm(body, callback)
      break
    case forms.NEWSLETTER_SIGNUP_FORM:
      newsletterSignupForm(body, callback)
      break
    default:
      console.log(
        `Error(submission-created): Invalid submission, no matching form hanlder`
      )
  }
}
