import React from "react"
import cx from "classname"

import "./checkbox-input.css"

export default function CheckboxInput({
  name,
  label,
  isRequired,
  containerClassName,
  inputClassName,
  type,
  onClick,
  value,
  style,
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
        type={"checkbox"}
        onClick={onClick}
        value={value || ""}
        aria-describedby={name}
        style={style ? style : {}}
      />
    </div>
  )
}
