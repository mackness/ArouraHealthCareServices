import React from "react"
import "./services-matrix.css"

import FaIcon from "./icons/fa-icon"

export default function ServicesMatrix() {
  return (
    <div className="matrix mw9 center ph3-ns pa2">
      <div className="shadow cf ph2-ns bg-white br2 pt3">
        <div className="fl w-100 w-25-ns pa2 ph4">
          <div className="bg-white">
            <FaIcon
              fontSize="35px"
              className="fas fa-concierge-bell"
              color="#192f59"
            />
            <p className="matrix-title mt2 mb2 fw7 f5 lh-copy ma0">
              Dedicated Talent Services
            </p>
            <p className="matrix-subtitle black-70">
              If you are looking for talented professionals, contact Sterling
              and Landers. We're recruiting specialists and have been a valuable
              resource partner for many clients since 2013.
            </p>
          </div>
        </div>
        <div className="fl w-100 w-25-ns pa2 ph4">
          <div className="bg-white">
            <FaIcon
              fontSize="35px"
              className="fab fa-algolia"
              color="#192f59"
            />
            <p className="matrix-title mt2 mb2 fw7 f5 lh-copy ma0">
              Dedicated Talent Services
            </p>
            <p className="matrix-subtitle black-70">
              If you are looking for talented professionals, contact Sterling
              and Landers. We're recruiting specialists and have been a valuable
              resource partner for many clients since 2013.
            </p>
          </div>
        </div>
        <div className="fl w-100 w-25-ns pa2 ph4">
          <div className="bg-white">
            <FaIcon fontSize="35px" className="fas fa-users" color="#192f59" />
            <p className="matrix-title mt2 mb2 fw7 f5 lh-copy ma0">
              Dedicated Talent Services
            </p>
            <p className="matrix-subtitle black-70">
              If you are looking for talented professionals, contact Sterling
              and Landers. We're recruiting specialists and have been a valuable
              resource partner for many clients since 2013.
            </p>
          </div>
        </div>
        <div className="fl w-100 w-25-ns pa2 ph4">
          <div className="bg-white">
            <FaIcon
              fontSize="35px"
              className="fas fa-concierge-bell"
              color="#192f59"
            />
            <p className="matrix-title mt2 mb2 fw7 f5 lh-copy ma0">
              Dedicated Talent Services
            </p>
            <p className="matrix-subtitle black-70">
              If you are looking for talented professionals, contact Sterling
              and Landers. We're recruiting specialists and have been a valuable
              resource partner for many clients since 2013.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}