import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductDetail from "../components/productDetail"


const Product = ({ data }) => {
  return (
    <Layout bg="white" back="/shop">
      <ProductDetail product={data.shopifyProduct} />
    </Layout>
  )
}
export default Product

export const query = graphql`
  query ProductQuery($handle: String) {
    shopifyProduct(handle: { eq: $handle }) {
      images {
        originalSrc
      }
      descriptionHtml
      title
      variants {
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
      }
    }
  }
`