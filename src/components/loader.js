import React from "react"
import "./loader.css"

export default function Loader() {
  return (
    <div className="w-100 h-100 flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <div className="loader"></div>
    </div>
  )
}
