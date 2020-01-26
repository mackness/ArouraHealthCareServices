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

const ContactPage = () => (
  <Layout>
    <SEO title="About" />
    <Header>
      <div class="mw8 center pa3">
        <h2 class="serif text-shadow f2 f1-l fw2 white mb2 lh-title mw8 cetner">
          Contact Breakwater Health Care Services
        </h2>
      </div>
    </Header>
    <div class="mw8 center">
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

export default ContactPage
