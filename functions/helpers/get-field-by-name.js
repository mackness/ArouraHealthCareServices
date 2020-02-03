module.exports = function getFieldByName(fields, name) {
  return _.find(
    _.get(fields, "payload.ordered_human_fields"),
    field => field.name === name
  )
}
