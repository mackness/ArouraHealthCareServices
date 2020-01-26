import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "./icons/logo"
import Navigation from "./navigation"
import PhoneIcon from "./icons/phone"
import HeaderBackground from "./header-background"

import React, { Children } from "react"
import "./header.css"
import "./common.css"

const Header = ({ siteTitle, isIndex, children }) => (
  <header>
    <div className="top-bar">
      <div className="top-bar-inner mw8 center flex items-center w-100 justify-end">
        <div className="top-bar-email pv1 ph2">info@bwr.com</div>
        <div className="top-bar-phone pv1 ph2 ph3 ph4-l">
          {/* <PhoneIcon className="mr1" /> */}
          818.800.4645
        </div>
      </div>
    </div>
    <header>
      <div className="header-bg cover bg-left bg-center-l">
        {/* <HeaderBackground /> */}
        <Navigation />
        <div
          className={`site-header relative ${
            isIndex ? "pb5 pb6-m pb7-l" : "pb4 pb5-m"
          }`}
        >
          {children}
        </div>
      </div>
    </header>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
