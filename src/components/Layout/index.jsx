import React from "react"
import PropTypes from "prop-types"

import { Container } from "./style"
import { GlobalStyle } from "../../styles/global"
import { Header } from "../Header"

export const Layout = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Header />
    {children}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
