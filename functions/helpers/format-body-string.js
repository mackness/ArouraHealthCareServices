exports.default = function(fields) {
  try {
    return fields
      .reduce((acc, field, idx) => {
        return [...acc, `${field.name}:`, field.value]
      }, [])
      .join("\n")
  } catch {
    console.log("Error(format-body-string): Failed to format body string")
  }
}
