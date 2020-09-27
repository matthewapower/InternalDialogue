import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/id-logo.svg"
import ProductGrid from "../components/productGrid"

const Grid = () => (
  <div>
    <SEO title="Home" />
    <h1>Hey err body</h1>
    <img src={logo} alt="" className="mx-auto py-20 pb-10" />
    <ProductGrid />
  </div>
)

const Product = () => {
  return (
    <Layout bg="white" windowActive bgChild={<Grid />} back="/shop">
      <h1>Hello</h1>
    </Layout>
  )
}
export default Product
