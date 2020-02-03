const _ = require("lodash")
const { sendTextMessage, writeToNewsLetterTable } = require("../actions")
const { getFieldByName } = require("../helpers")

module.exports = function(body, callback) {
  // _.get(body, "payload.ordered_human_fields").forEach(field =>
  //   console.log(field)
  // )

  if (
    _.get(getFieldByName(body, "newsletterCheckbox"), "value", "false") ===
    "true"
  ) {
    writeToNewsLetterTable(getFieldByName(body, "email"))
  }
  sendTextMessage(_.get(body, "payload.ordered_human_fields"), callback)
}
