import React from "react"
import { Link } from "gatsby"
import shirt from "../images/human-inside.png"
import { useStaticQuery, graphql } from "gatsby"

export default function ProductGrid() {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          handle
          images {
            originalSrc
          }
        }
      }
    }
  `)
  const products = data.allShopifyProduct.nodes
  return (
    <div className="grid grid-cols-3 gap-16 px-12 items-center justify-center max-w-2xl">
      {products.map(p => (
        <Link to={`/shop/${p.handle}`}>
          <img src={p.images[0].originalSrc} alt="" />
        </Link>
      ))}
    </div>
  )
}
