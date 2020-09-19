import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/stamp-white.svg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex items-center justify-center absolute inset-0">
        <img
          src={logo}
          alt="Internal Dialogue"
          className="transform -translate-y-12"
        />
      </div>
    </Layout>
  )
}
export default IndexPage
