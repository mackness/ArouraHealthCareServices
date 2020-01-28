import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import ServicesMatrix from "../components/services-matrix"
import SEO from "../components/seo"
import ContactFrom from "../components/contact-form"
import Card from "../components/card"
import Footer from "../components/footer"
import NewsletterForm from "../components/newsletter-form"
// import Map from "../components/map"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header isIndex>
      <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="serif text-shadow f2 f1-l fw2 white mb2 lh-title">
          Welcome to Breakwater Health Care Services
        </h1>
        <div className="flex justify-center-l">
          <div className="divider bg-white-90 mv4 mh"></div>
        </div>
        <h2 className="subtitle fw1 fw3-l sans-serif white-90 f3-l mb4 lh-copy lh-title-l">
          Please let us know whether you are a canidate or a company who needs
          to hire
        </h2>
        <Link
          className="button f6 no-underline grow dib v-mid white ba ph3 pv2 mb3"
          to="/candidate"
        >
          I am a candidate
        </Link>
        <span className="dib v-mid ph3 white-70 mb3">or</span>
        <Link
          className="button f6 no-underline grow dib v-mid white ba ph3 pv2 mb3"
          to="/employer"
        >
          I am a hiring
        </Link>
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
    </Header>
    <Card
      style={{
        marginTop: "-65px",
      }}
    >
      <ServicesMatrix />
    </Card>
    <div className="flex-l mw8 center mb3 mb4-l">
      <Card
        style={{
          flex: 1,
          minHeight: "550px",
        }}
      >
        <ContactFrom />
        {/* <Map /> */}
      </Card>
      <div
        style={{
          flex: 1,
        }}
      >
        <Card>
          <h4 className="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
            Reach out to us!
          </h4>
          <p className="matrix-subtitle black-70">
            If you are looking for talented professionals, contact Sterling and
            Landers. We're recruiting specialists and have been a valuable
            resource partner for many clients since 2013. If you are looking for
            talented professionals, contact Sterling and Landers. We're
            recruiting specialists and have been a valuable resource partner for
            many clients since 2013. If you are looking for talented
            professionals, contact Sterling and Landers. We're recruiting
            specialists and have been a valuable resource partner for many
            clients since 2013. If you are looking for talented professionals,
            contact Sterling and Landers. We're recruiting specialists and have
            been a valuable resource partner for many clients since 2013.
          </p>
        </Card>
        <Card backgroundColor={"#182a4f"} cardClassName="pa3 relative">
          <NewsletterForm />
        </Card>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
