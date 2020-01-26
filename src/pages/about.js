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

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Header>
      <div class="mw8 center pa3">
        <h2 class="serif text-shadow f2 f1-l fw2 white mb2 lh-title mw8 cetner">
          About Breakwater Health Care Services
        </h2>
      </div>
    </Header>
    <div class="mw8 center">
      <Card
        style={{
          marginTop: "-65px",
        }}
      >
        <h4 class="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
          Reach out to us!
        </h4>
        <p>
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
        <p>
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
        <p>
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

export default AboutPage
