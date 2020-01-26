import React from "react"

export default function FaIcon({ className, color, fontSize, style }) {
  return (
    <span
      style={{
        fontSize,
        color,
        ...style,
      }}
    >
      <i className={`${className}`}></i>
    </span>
  )
}
