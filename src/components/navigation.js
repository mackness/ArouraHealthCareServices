import React from "react"
import "./navigation.css"

export default function Navigation() {
  return (
    <header className="bg-black-90 w-100 pv2 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked mw8 center flex justify-center">
        <a className="link dim dib mr3" href="#" title="Home">
          Home
        </a>
        <a className="link dim dib mr3" href="#" title="About">
          About
        </a>
        <a className="link dim dib mr3" href="#" title="Store">
          Store
        </a>
        <a className="link dim dib" href="#" title="Contact">
          Contact
        </a>
      </nav>
    </header>
  )
}
