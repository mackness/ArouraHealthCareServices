module.exports = function(payload) {
  try {
    return JSON.parse(payload)
  } catch {
    console.log("Error(decode-payload): Failed to decode payload string")
  }
}
