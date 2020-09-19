/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import Dock from "./dock"
import Info from "./info"

import "./layout.css"

const Layout = ({ children }) => {
  const [activeWindow, setActiveWindow] = useState(null)
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        className="fixed inset-0 flex flex-col items-center justify-between self-stretch"
        style={{
          margin: `0 auto`,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main>{children}</main>
        <Info setActiveWindow={setActiveWindow} activeWindow={activeWindow} />
        <Dock setActiveWindow={setActiveWindow} activeWindow={activeWindow} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
