import React from "react"
import { Link } from "gatsby"
import shirt from "../images/human-inside.png"

let products = [
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
  { url: shirt },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 px-12">
      {products.map(p => (
        <Link to="/product">
          <img src={p.url} alt="" />
        </Link>
      ))}
    </div>
  )
}
