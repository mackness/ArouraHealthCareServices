import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import ServicesMatrix from "../components/services-matrix"
import SEO from "../components/seo"
import ContactFrom from "../components/contact-form"
import Card from "../components/card"

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
    <Card>
      <ContactFrom />
    </Card>
  </Layout>
)

export default IndexPage
