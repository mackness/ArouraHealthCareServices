const _ = require("lodash")
const { sendTextMessage } = require("../actions")

module.exports = function(body, callback) {
  sendTextMessage(_.get(body, "payload.ordered_human_fields"), callback)
}
