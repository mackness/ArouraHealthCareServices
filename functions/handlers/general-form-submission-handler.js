const _ = require("lodash")
const { sendTextMessage, writeToNewsLetterTable } = require("../actions")
const { getFieldByName } = require("../helpers")

module.exports = function(body, callback) {
  if (
    _.get(getFieldByName(body, "newsletterCheckbox"), "value", "false") ===
    "true"
  ) {
    writeToNewsLetterTable(_.get(getFieldByName(body, "email"), "value"))
  }
  sendTextMessage(_.get(body, "payload.ordered_human_fields"), callback)
}
