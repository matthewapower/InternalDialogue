/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import Dock from "./dock"
import Panel from "./panel"
import Info from "./info"

import "./layout.css"

const Layout = ({ children, bg, bgChild, windowActive, back }) => {
  const [activeWindow, setActiveWindow] = useState(null)

  if (windowActive && activeWindow !== "secondary") setActiveWindow("secondary")

  useEffect(() => {
    if (windowActive && activeWindow === null) navigate(back)
  }, [activeWindow])

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        className="fixed inset-0 flex flex-col items-center justify-between self-stretch overflow-y-scroll"
        style={{
          margin: `0 auto`,
          background: bg
            ? bg
            : 'url("https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80") center center/cover',
        }}
      >
        <main>{bgChild ? bgChild : children}</main>
        <Info setActiveWindow={setActiveWindow} activeWindow={activeWindow} />
        <Panel
          setActiveWindow={setActiveWindow}
          active={activeWindow === "secondary"}
        >
          {bgChild ? children : ""}
        </Panel>
        <Dock setActiveWindow={setActiveWindow} activeWindow={activeWindow} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
