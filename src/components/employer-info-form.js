import React from "react"
import Form from "./form"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import TextAreaInput from "./TextAreaInput"

export default function EmployerInfoForm() {
  return (
    <Form>
      {({ state, handleChange, handleSubmit }) => {
        return (
          <div className="sans-serif">
            {/* <h4 className="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
              Reach out to us!
            </h4> */}
            <small id="name-desc" className="f6 black-60 db mb4">
              Fill out this form with details about the type candidate you are
              looking for and our awesome recruiting team will get back to you
              ASAP
            </small>
            <form
              className="black-80 mb0"
              onSubmit={handleSubmit}
              data-netlify="true"
              name="employer-info-form"
              data-netlify-honeypot="bot-field"
            >
              <TextInput
                name="firstName"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="First Name"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.firstName || ""}
              />

              <TextInput
                name="lastName"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Last name"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.lastName || ""}
              />

              <TextInput
                name="companyName"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Company name"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.companyName || ""}
              />

              <TextInput
                name="positionTitle"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Position title"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.positionTitle || ""}
              />

              <TextInput
                name="email"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="E-mail"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.email || ""}
              />

              <TextInput
                name="phone"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Phone"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.phone || ""}
              />

              <TextInput
                name="websiteAddress"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="Website address"
                type="text"
                type="text"
                onChange={handleChange}
                value={state.websiteAddress || ""}
              />

              <SelectInput
                name="positions"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                label="How many positions are you hiring for?"
                type="text"
                type="text"
                options={["1", "2", "3", "4", "5+"]}
                onChange={handleChange}
                value={state.positions || ""}
              />

              <TextAreaInput
                name="message"
                label="A breif message"
                inputClassName="input-reset ba b--black-20 pa2 mb2 db w-100"
                onChange={handleChange}
                value={state.message || ""}
                minHeight={350}
                type="text"
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
