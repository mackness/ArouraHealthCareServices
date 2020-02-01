const _ = require("lodash")
const client = require("twilio")(
  process.env.TWILLIO_ACCOUNT_SID,
  process.env.TWILLIO_ACCOUNT_AUTH_TOKEN
)

const { formatBodyString } = require("../helpers")

exports.default = function(body, callback) {
  client.messages
    .create({
      body: formatBodyString(_.get(body, "payload.ordered_human_fields")),
      from: process.env.TWILLIO_ACCOUNT_PHONE_NUMNER,
      to: process.env.TARGET_CELL_PHONE_NUMBER,
    })
    .then(message => {
      console.log(message.sid)
      callback({
        status: "success",
        code: 200,
      })
    })
    .catch(error => {
      console.log(error)
    })
}
