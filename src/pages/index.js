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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Card
      style={{
        marginTop: "-65px",
      }}
    >
      <ServicesMatrix />
    </Card>
    <div className="flex-l mw8 center mb4-l">
      <Card
        style={{
          flex: 1,
        }}
      >
        <ContactFrom />
        {/* <Map /> */}
      </Card>
      <Card
        style={{
          flex: 1,
        }}
      >
        <h4 class="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
          Reach out to us!
        </h4>
        <p class="matrix-subtitle black-70">
          If you are looking for talented professionals, contact Sterling and
          Landers. We're recruiting specialists and have been a valuable
          resource partner for many clients since 2013. If you are looking for
          talented professionals, contact Sterling and Landers. We're recruiting
          specialists and have been a valuable resource partner for many clients
          since 2013. If you are looking for talented professionals, contact
          Sterling and Landers. We're recruiting specialists and have been a
          valuable resource partner for many clients since 2013. If you are
          looking for talented professionals, contact Sterling and Landers.
          We're recruiting specialists and have been a valuable resource partner
          for many clients since 2013.
        </p>
      </Card>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
