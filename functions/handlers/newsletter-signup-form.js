const _ = require("lodash")
const { writeToNewsLetterTable } = require("../actions")

module.exports = function(body, callback) {
  writeToNewsLetterTable(_.get(body, "payload.data.newsletterEmail"), callback)
}
