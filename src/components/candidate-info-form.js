import React from "react"
import get from "lodash/get"
import Form from "./form"
import TextInput from "./TextInput"
import FileInput from "./FileInput"
import TextAreaInput from "./TextAreaInput"
import CheckboxInput from "./CheckboxInput"

export default function CandidateInfoForm() {
  return (
    <Form>
      {({
        state,
        handleChange,
        handleAttachment,
        handleCheckBoxChange,
        handleSubmit,
      }) => {
        return (
          <div className="sans-serif">
            <form
              className="black-80 mb0"
              onSubmit={handleSubmit}
              data-netlify="true"
              name="candidate-info-form"
              data-netlify-honeypot="bot-field"
            >
              <TextInput
                isRequired
                name="firstName"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="First Name"
                type="text"
                onChange={handleChange}
                value={state.firstName || ""}
              />

              <TextInput
                isRequired
                name="lastName"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Last name"
                type="text"
                onChange={handleChange}
                value={state.lastName || ""}
              />

              <TextInput
                isRequired
                name="phone"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Phone"
                type="tel"
                onChange={handleChange}
                value={state.phone || ""}
              />

              <TextInput
                isRequired
                name="email"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="E-mail"
                type="text"
                onChange={handleChange}
                value={state.email || ""}
              />

              <div className="flex justify-center-ns">
                <div className="divider bg-moon-gray mv4 mh"></div>
              </div>

              <FileInput
                isRequired
                name="fileInput"
                label="Please upload your resume in .PDF or .DOC format"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                onChange={handleAttachment}
              />

              <div className="flex justify-center-ns">
                <div className="divider bg-moon-gray mv4 mh"></div>
              </div>

              <TextAreaInput
                name="message"
                label="A breif message about what you're looking for in your next role"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                onChange={handleChange}
                value={state.message || ""}
                minHeight={350}
                type="text"
              />

              <CheckboxInput
                name="newsletterCheckbox"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Sign up for our newsletter"
                onClick={handleCheckBoxChange}
                value={state.newsLetterCheckbox || ""}
                style={{ WebkitAppearance: "checkbox", width: "auto" }}
              />

              <button
                className="button f6 no-underline grow dib v-mid white ba ph3 pv2 mb3 w-100 tc mt3 mb0"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )
      }}
    </Form>
  )
}
