import React from "react"
import { Router } from "@reach/router"
import Shop from "../components/shop"

const ShopPage = () => {
  return (
    <Router>
      <Shop path="/shop/*" />
    </Router>
  )
}
export default ShopPage
