import React from "react"
import "./navigation.css"

function isActive(path) {
  return typeof window === "object" && window.location.pathname === path
}

export default function Navigation() {
  return (
    <header className="bg-black-90 w-100 pv2 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked mw8 center flex justify-center">
        <a
          className={`${isActive("/") ? "active" : ""} link dim dib mr3`}
          href="/"
          title="Home"
        >
          Home
        </a>
        <a
          className={`${isActive("/about") ? "active" : ""} link dim dib mr3`}
          href="/about"
          title="About"
        >
          About
        </a>
        <a
          className={`${
            isActive("/services") ? "active" : ""
          } link dim dib mr3`}
          href="/services"
          title="Store"
        >
          services
        </a>
        <a
          className={`${isActive("/contact") ? "active" : ""} link dim dib`}
          href="/contact"
          title="Contact"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
