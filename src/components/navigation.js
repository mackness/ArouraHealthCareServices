import React from "react"
import { Link } from "gatsby"
import "./navigation.css"

function isActive(path) {
  return typeof window === "object" && window.location.pathname === path
}

export default function Navigation() {
  const activeStyle = {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#36a85b ",
  }
  return (
    <header className="w-100 pv2 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked mw8 center flex justify-center">
        <Link to="/" className="link dim dib mr3" activeStyle={activeStyle}>
          Home
        </Link>
        <Link
          to="/about"
          className="link dim dib mr3"
          activeStyle={activeStyle}
        >
          About
        </Link>
        <Link
          to="/services"
          className="link dim dib mr3"
          activeStyle={activeStyle}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="link dim dib mr3"
          activeStyle={activeStyle}
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
