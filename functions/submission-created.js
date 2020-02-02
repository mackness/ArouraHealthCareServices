require("dotenv").config()
const _ = require("lodash")
const {
  homePageContactForm,
  newsletterSignupForm,
  employerInfoForm,
  candidateInfoForm,
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
  console.log({ event })
  console.log({ context })

  const body = decodePayload(event.body)

  switch (_.get(body, "payload.form_name")) {
    case forms.CONTACT_PAGE_CONTACT_FORM:
    case forms.HOMEPAGE_CONTACT_FORM:
      homePageContactForm(body, callback)
      break
    case forms.NEWSLETTER_SIGNUP_FORM:
      newsletterSignupForm(body, callback)
    case forms.EMPLOYER_INFO_FORM:
      employerInfoForm(body, callback)
    case forms.CANDIDATE_INFO_FORM:
      candidateInfoForm(body, callback)
      break
    default:
      console.log(
        `Error(submission-created): Invalid submission, no matching form hanlder`,
        { form_name: _.get(body, "payload.form_name") }
      )
  }
}
