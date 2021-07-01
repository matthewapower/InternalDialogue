import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useWindowUpdate } from "./WindowContext"

export default function ProductGrid() {
  const setActiveWindow = useWindowUpdate()
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          handle
          title
          id
          descriptionHtml
          options {
            name
            values
          }    
          variants {
            price
            title
            id
            shopifyId
          }
          images {
            originalSrc
          }
        }
      }
    }
  `)
  const products = data.allShopifyProduct.nodes
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-16 px-12 items-center justify-center max-w-2xl">
      {products.map(p => (
        <button
        >
          <img src={p.images[0].originalSrc} className="mb-0" alt={p.handle} />
        </button>
      ))}
    </div>
  )
}
