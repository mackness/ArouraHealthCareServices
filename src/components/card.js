import React from "react"
import cx from "classnames"
import "./card.css"

export default function Card({ children, className, style }) {
  const { minHeight } = style ? style : {}
  return (
    <section
      style={style}
      className={cx("pa3", "hidden", "relative", className)}
    >
      <div className="shadow bg-white br2">
        <div className="pa4 relative" style={minHeight ? { minHeight } : {}}>
          {children}
        </div>
      </div>
    </section>
  )
}
