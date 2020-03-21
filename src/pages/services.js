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

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Header>
      <div className="mw8 center pa4 tc-ns mt4-ns">
        <h2 className="serif text-shadow f2 fw1 white mb2 lh-title">
          Services Breakwater Health Care Services
        </h2>
        <div className="flex justify-center-ns">
          <div className="divider bg-white-90 mv4 mh"></div>
        </div>
      </div>
    </Header>
    <div className="mw8 center flex-l">
      <div className="w-75-l">
        <Card
          style={{
            marginTop: "-65px",
          }}
        >
          <h4 className="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
            Candidates looking for opportunities
          </h4>
          <p>
            Thank you for considering our assistance. With over 12 years of
            placing people for home health and hospice, we have a great
            understanding of this business. We know you are looking for the
            right opportunity, someplace where you will be appreciated for your
            work. We know you do not want to be micromanaged but will also have
            support when you need it. We understand and we are here to help.
          </p>
          <p>
            We have been very successful in placing people with great companies.
            We spend time up front providing you with information about the
            company and the requirements. We like to provide you with as much
            information as we can so that you can decide if it is an opportunity
            you would like to explore.
          </p>
        </Card>

        <Card>
          <h4 className="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
            Company seeking candidates
          </h4>
          <p>
            Company seeking people Thank you for your interest in learning about
            us. We work with companies throughout the country. We work with
            start-up home health and hospice agencies and we work with some of
            the largest companies in the country. We have a strong ability to
            provide people that will stay for many years. How do we do this? We
            know our candidates work with us because we provide them with a good
            understanding of what will be required. We will provide them with
            information about any challenges they will face walking into a new
            position in your organization. We know the questions candidates will
            ask and we provide the answers. Our presentations are solid, and
            candidates trust us. We screen the candidates carefully to make sure
            they understand the requirements and are ready to meet the
            challenges. Our candidates stay because they are informed and
            prepared.{" "}
          </p>
          <p>
            Our goal is to always provide the best talent. There is great
            satisfaction in knowing that we have placed someone that will make a
            strong contribution to your success. We provide candidates that have
            stable work history, a track record of success, and are passionate
            about patient care.
          </p>
        </Card>
        <Card>
          <h4 className="brand-blue sans-serif mt2 mb3 fw7 f3 lh-copy ma0">
            Most frequently filled positions for Home Health and Hospice
          </h4>
          <ul>
            <li>Administrators </li>
            <li>Executive Directors </li>
            <li>Chief Executive Officers </li>
            <li>Chief Operations Officers </li>
            <li>Vice Presidents </li>
            <li>Division Directors </li>
            <li>Area Administrators </li>
            <li>Chief Nursing Officer </li>
            <li>Director of Patient Care Services</li>
            <li>Manager of Patient Care Services</li>
            <li>Supervisors</li>
            <li>Case Managers</li>
            <li>Compliance Specialists</li>
            <li>Quality and Performance Improvement</li>
            <li>Compliance Directors</li>
            <li>Regional Clinical Directors</li>
          </ul>
        </Card>
      </div>
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

export default ServicesPage
