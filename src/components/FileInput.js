import React, { useState } from "react"
import get from "lodash/get"
import head from "lodash/head"
import cx from "classname"
import FaIcon from "./icons/fa-icon"

export function Document({ icon, label }) {
  return (
    <div className="flex pb2">
      {icon}
      <span className="pl2">{label}</span>
    </div>
  )
}

export function truncate(string) {
  return string.length > 16 ? string.substr(string.length - 16) : string
}

export default function FileInput({
  name,
  label,
  isRequired,
  containerClassName,
  inputClassName,
  type,
  onChange,
  value,
}) {
  const [files, setFiles] = useState([])
  function internalChange(event) {
    setFiles([...files, event.target.files.item(0)])
  }

  return (
    <div className={cx("measure", containerClassName)}>
      <label htmlFor={name} className="f6 b db mb2">
        {label}{" "}
        <span className="normal black-60">{`(${
          isRequired ? "required" : "optional"
        })`}</span>
      </label>
      <input
        required={isRequired}
        id={name}
        name={name}
        className={cx(inputClassName)}
        type={"file"}
        onChange={event => {
          internalChange(event)
          onChange(event)
        }}
        aria-describedby={`${name}-desc`}
        accept=".doc, .docx, .pdf, .odt, .rtf, .epub"
      />
      {files.length > 0 &&
        files.map((file, index) => {
          switch (true) {
            case get(file, "type", "").indexOf("pdf") > -1:
              return (
                <Document
                  key={index}
                  label={truncate(file.name)}
                  icon={
                    <FaIcon
                      key={index}
                      fontSize="29px"
                      className="far fa-file-pdf"
                      color="rgb(200,25,31)"
                    />
                  }
                />
              )
            case get(file, "type", "").indexOf(".doc") > -1 ||
              get(file, "type", "").indexOf(".docx") > -1:
              return (
                <Document
                  key={index}
                  label={truncate(file.name)}
                  icon={
                    <FaIcon
                      key={index}
                      fontSize="29px"
                      className="far fa-file-word"
                      color="rgb(72,131,243)"
                    />
                  }
                />
              )
            default:
              return (
                <Document
                  key={index}
                  label={truncate(file.name)}
                  icon={
                    <FaIcon
                      key={index}
                      fontSize="29px"
                      className="far fa-file-alt"
                      color="rgb(72,131,243)"
                    />
                  }
                />
              )
          }
        })}
    </div>
  )
}
