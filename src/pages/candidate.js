import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import ServicesMatrix from "../components/services-matrix"
import SEO from "../components/seo"
import ContactFrom from "../components/contact-form"
import Card from "../components/card"
import Footer from "../components/footer"
// import Map from "../components/map"

const EmployerInfo = () => (
  <Layout>
    <SEO title="Employer Info Form" />
    <Header>
      <div className="mw8 center pa4 tc-ns mt4-ns">
        <h2 className="serif text-shadow f2 fw1 white mb2 lh-title">
          Employer info form
        </h2>
        <div className="flex justify-center-ns">
          <div className="divider bg-white-90 mv4 mh"></div>
        </div>
      </div>
    </Header>
    <div className="mw6 center">
      <Card
        style={{
          marginTop: "-65px",
        }}
      >
        <ContactFrom />
      </Card>
    </div>
    <Footer />
  </Layout>
)

export default EmployerInfo
