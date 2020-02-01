require("dotenv").config()
const { homePageContactForm } = require("./handlers")

const forms = {
  HOMEPAGE_CONTACT_FORM: "homepage-contact-from",
}

exports.handler = function(event, context, callback) {
  console.log({ event })
  console.log({ context })

  switch (event.body.form_name) {
    case forms.HOMEPAGE_CONTACT_FORM:
      homePageContactForm(event, callback)
      return
  }
}
