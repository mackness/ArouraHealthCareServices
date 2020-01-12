import React from "react"

export default function FaIcon({ className, color, fontSize }) {
  return (
    <span
      style={{
        fontSize,
        color,
      }}
    >
      <i className={`${className}`}></i>
    </span>
  )
}
