require("dotenv").config()
const _ = require()
const { homePageContactForm } = require("./handlers")
const { decodePayload } = require("./helpers")

const forms = {
  HOMEPAGE_CONTACT_FORM: "homepage-contact-from",
}

exports.handler = function(event, context, callback) {
  console.log({ event })
  console.log({ context })

  const body = decodePayload(event.body)

  switch (_.get(body, "payload.form_name")) {
    case forms.HOMEPAGE_CONTACT_FORM:
      homePageContactForm(body, callback)
      break
    default:
      console.log(
        `Error(submission-created): Invalid submission, no matching form hanlder`
      )
  }
}
