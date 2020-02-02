const _ = require("lodash")
const { sendTextMessage } = require("../actions")

module.exports = function(body, callback) {
  // _.get(body, "payload.ordered_human_fields").forEach(field =>
  //   console.log(field)
  // )

  if (
    _.get(
      _.find(
        _.get(body, "payload.ordered_human_fields"),
        field => field.name === "newsletterCheckbox"
      ),
      "value",
      "false"
    ) === "true"
  )
    sendTextMessage(_.get(body, "payload.ordered_human_fields"), callback)
}
