import React, { useState, useEffect } from "react"
import Layout from "./layout"
import ProductGrid from "./productGrid"
import logo from "../images/id-logo.svg"
import SEO from "./seo"

export default function Shop(props) {
  const [product, setProduct] = useState(props["*"])
  console.log(props["*"])

  useEffect(() => {
    if (product === "") {
      setProduct(null)
    }
  }, [setProduct, product])

  return (
    <Layout bg="white" windowActive={product} winChild={<h1>Hi</h1>} back="/">
      <SEO title="Shop" />
      <img src={logo} alt="" className="mx-auto py-20 pb-10" />
      <ProductGrid />
    </Layout>
  )
}
