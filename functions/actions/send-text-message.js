const _ = require("lodash")
const client = require("twilio")(
  process.env.TWILLIO_ACCOUNT_SID,
  process.env.TWILLIO_ACCOUNT_AUTH_TOKEN
)

const { formatBodyString } = require("../helpers")

module.exports = function(body, callback) {
  client.messages
    .create({
      body: formatBodyString(body),
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
