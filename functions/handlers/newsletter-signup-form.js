const _ = require("lodash")
const GoogleSpreadsheet = require("google-spreadsheet")
const doc = new GoogleSpreadsheet(
  "1LbMQgmfrVYy9uGBB32q2KfELCBD-4z7kmhsznQlAYQw"
)

module.exports = function(body, callback) {
  const credentials = {
    type: process.env.GOOGLE_SERVICE_ACCOUNT_TYPE,
    project_id: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID,
    private_key_id: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.split(
      "\\n"
    ).join("\n"),
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID,
    auth_uri: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_URI,
    token_uri: process.env.GOOGLE_SERVICE_ACCOUNT_TOKEN_URI,
    auth_provider_x509_cert_url:
      process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_CERT_URL,
  }
  doc.useServiceAccountAuth(credentials, function(err) {
    if (err) {
      console.log(
        "Error(newsletter-signup-form): Failed to authenticate with Google auth provider",
        { err }
      )
    }
    doc.addRow(
      1,
      {
        timestamp: new Date(),
        email_address: _.get(body, "payload.data.newsletterEmail"),
      },
      function(err) {
        if (err) {
          console.log(
            "Error(newsletter-signup-form): Failed to write a row to the newsletter spreadsheet",
            { err }
          )
        }

        console.log(
          "Info(newsletter-signup-form): Wrote a row to the newsletter spreadsheet"
        )
        return callback({
          status: "success",
          code: 200,
        })
      }
    )
  })
}
