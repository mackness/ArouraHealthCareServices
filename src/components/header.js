import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "./icons/logo"
import Navigation from "./navigation"
import PhoneIcon from "./icons/phone"
import HeaderBackground from "./header-background"

import React from "react"
import "./header.css"
import "./common.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="top-bar">
      <div className="top-bar-inner mw8 center flex items-center w-100 justify-end">
        <div className="top-bar-email pv1 ph2">info@bwr.com</div>
        <div className="top-bar-phone pv1 ph2">
          {/* <PhoneIcon className="mr1" /> */}
          818.800.4645
        </div>
      </div>
    </div>
    <header>
      <div className="header-bg cover bg-left bg-center-l">
        {/* <HeaderBackground /> */}
        <Navigation />
        <div className="site-header relative pb5 pb6-m pb7-l">
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="serif text-shadow f2 f1-l fw2 white mb2 lh-title">
              Welcome to Breakwater Health Care Services
            </h1>
            <div className="divider bg-white-90 mv4"></div>
            <h2 className="subtitle fw1 sans-serif white-90 f4 mb4 lh-copy">
              Please let us know whether you are a canidate or a company who
              needs to hire
            </h2>
            <a
              className="button f6 no-underline grow dib v-mid white ba ph3 pv2 mb3"
              href="/"
            >
              I am a candidate
            </a>
            <span className="dib v-mid ph3 white-70 mb3">or</span>
            <a
              className="button f6 no-underline grow dib v-mid white ba ph3 pv2 mb3"
              href="/"
            >
              I am a hiring
            </a>
            {/* <a
              className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
              href=""
            >
              I am a canidate
            </a>
            <span className="dib v-mid ph3 white-70 mb3">or</span>
            <a
              className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
              href=""
            >
              I am a hiring manager
            </a> */}
          </div>
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
