import React from "react"
import { Link } from "gatsby"

import Navigation from "./navigation"
import "./footer.css"

const Footer = () => {
  return (
    <React.Fragment>
      <Navigation />
      <footer className="site-footer w-100 pv4 tc">
        <p className="white ma0 pa0">
          Breakwater Health Care {new Date().getFullYear()}
        </p>
      </footer>
    </React.Fragment>
  )
}

export default Footer
