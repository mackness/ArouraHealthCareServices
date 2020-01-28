import React from "react"
import cx from "classname"

export default function TextInput({
  name,
  label,
  isRequired,
  minHeight,
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
      <textarea
        id={name}
        name={name}
        className={cx(inputClassName)}
        type={type}
        onChange={onChange}
        value={value || ""}
        aria-describedby={`${name}-desc`}
        min-height={`${minHeight}px`}
        aria-describedby="message-desc"
      />
    </div>
  )
}
