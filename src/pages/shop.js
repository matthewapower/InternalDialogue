import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/id-logo.svg"
import ProductGrid from "../components/productGrid"

const ShopPage = () => {
  return (
    <Layout bg="white">
      <SEO title="Home" />
      <img src={logo} alt="" className="mx-auto py-20 pb-10" />
      <ProductGrid />
    </Layout>
  )
}
export default ShopPage
