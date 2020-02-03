require("dotenv").config()
const _ = require("lodash")
const {
  newsletterSignupFormSubmissionHandler,
  generalFormSubmissionHandler,
} = require("./handlers")
const { decodePayload } = require("./helpers")

const forms = {
  HOMEPAGE_CONTACT_FORM: "homepage-contact-from",
  CONTACT_PAGE_CONTACT_FORM: "contact-page-contact-from",
  NEWSLETTER_SIGNUP_FORM: "newsletter-signup-form",
  EMPLOYER_INFO_FORM: "employer-info-form",
  CANDIDATE_INFO_FORM: "candidate-info-form",
}

exports.handler = function(event, context, callback) {
  const body = decodePayload(event.body)

  switch (_.get(body, "payload.form_name")) {
    case forms.CONTACT_PAGE_CONTACT_FORM:
    case forms.HOMEPAGE_CONTACT_FORM:
    case forms.CANDIDATE_INFO_FORM:
    case forms.EMPLOYER_INFO_FORM:
      generalFormSubmissionHandler(body, callback)
      break
    case forms.NEWSLETTER_SIGNUP_FORM:
      newsletterSignupFormSubmissionHandler(body, callback)
      break
    default:
      console.log(
        `Error(submission-created): Invalid submission, no matching form hanlder`,
        { form_name: _.get(body, "payload.form_name") }
      )
  }
}
