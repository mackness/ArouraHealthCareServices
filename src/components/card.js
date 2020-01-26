import React from "react"
import cx from "classnames"
import "./card.css"

export default function Card({
  children,
  className,
  style,
  backgroundColor,
  cardClassName,
}) {
  const { minHeight } = style ? style : {}
  return (
    <section
      style={style}
      className={cx("pa3", "hidden", "relative", className)}
    >
      <div
        className="shadow bg-white br2"
        style={backgroundColor ? { backgroundColor } : {}}
      >
        <div
          className={cardClassName ? cardClassName : cx("pa4", "relative")}
          style={minHeight ? { minHeight } : {}}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
