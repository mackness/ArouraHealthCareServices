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
  options,
}) {
  return (
    <div className={cx("measure", containerClassName)}>
      <label htmlFor={name} className="f6 b db mb2">
        {label}{" "}
        <span className="normal black-60">{`(${
          isRequired ? "required" : "optional"
        })`}</span>
      </label>
      <select
        id={name}
        name={name}
        className={cx(inputClassName)}
        type={type}
        onChange={onChange}
        value={value || ""}
        aria-describedby={name}
        value={value}
      >
        {[
          <option key={-10}>Please select a number...</option>,
          ...options.map((_value, i) => (
            <option key={i} value={_value}>
              {_value}
            </option>
          )),
        ]}
      </select>
    </div>
  )
}
