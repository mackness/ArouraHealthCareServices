import React from "react"
import cx from "classname"

export default function TextInput({
  name,
  label,
  isRequired,
  containerClassName,
  inputClassName,
  type,
  onChange,
  value,
}) {
  return (
    <div className={cx("measure", containerClassName)}>
      <label htmlFor={name} className="f6 b db mb2">
        {label}{" "}
        <span className="normal black-60">{`(${
          isRequired ? "required" : "optional"
        })`}</span>
      </label>
      <input
        id={name}
        name={name}
        className={cx(inputClassName)}
        type={"file"}
        onChange={onChange}
        value={value || ""}
        aria-describedby={`${name}-desc`}
        accept=".doc,.docx,.pdf,.odt,.rtf,.epub"
      />
    </div>
  )
}
