require("dotenv").config()
const client = require("twilio")(
  process.env.TWILLIO_ACCOUNT_SID,
  process.env.TWILLIO_ACCOUNT_AUTH_TOKEN
)

exports.handler = function(event, context, callback) {
  console.log({ event })
  console.log({ context })
  client.messages
    .create({
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
      from: "+12029184096",
      to: "+3104051257",
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
