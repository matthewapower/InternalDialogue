import React from "react"
import Layout from "../components/layout"
import Shop from "../components/shop"

const ShopPage = () => {
  return (
    <Layout bg="white">
      <Shop path="/shop/*" />
    </Layout>
  )
}
export default ShopPage
