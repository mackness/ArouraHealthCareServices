import React from "react"
import "./loader.css"

export default function Loader() {
  return (
    <div className="w-100 h-100 flex justify-center items-center absolute absolute--fill">
      <div className="loader"></div>
    </div>
  )
}
