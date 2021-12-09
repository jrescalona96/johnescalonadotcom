import * as React from "react"
import PropTypes from "prop-types"

import NavBar from "./navBar"
import "../../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
