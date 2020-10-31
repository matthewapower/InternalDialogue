import React from "react"
import Layout from "./layout"
import ProductGrid from "./productGrid"
import logo from "../images/id-logo.svg"
import SEO from "./seo"

export default function Shop(props) {
  return (
    <Layout bg="white">
      <SEO title="Shop" />
      <img src={logo} alt="" className="mx-auto py-20 pb-10" />
      <ProductGrid />
    </Layout>
  )
}
