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
import NewsletterForm from "../components/newsletter-form"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Header>
      <div className="mw8 center pa4 tc-ns mt4-ns">
        <h2 className="serif text-shadow f2 fw1 white mb2 lh-title">
          About Breakwater Health Care Services
        </h2>
        <div className="flex justify-center-ns">
          <div className="divider bg-white-90 mv4 mh"></div>
        </div>
      </div>
    </Header>
    <div className="mw8 center flex-l">
      <Card
        className="w-75-l"
        style={{
          marginTop: "-65px",
        }}
      >
        <h4 className="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
          Reach out to us!
        </h4>

        <p>
          A Premier Home Health and Hospice Talent Resource Providing
          experienced people who are passionate about caring for your patients
          and your business.{" "}
        </p>

        <p>
          Our greatest strength is our knowledge about your business. With over
          12 years of experience placing professionals for home health and
          hospice, we understand your needs. Our intention is to make a highly
          successful match where everyone involved thrives.
        </p>
      </Card>
      <div className="w-34-l">
        <Card
          backgroundColor={"#182a4f"}
          cardClassName="pa3 relative"
          style={{ minHeight: "278px" }}
        >
          <NewsletterForm />
        </Card>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default AboutPage
