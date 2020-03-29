import React from "react"

import { Container, Image } from "./style"

import Logo from "../../images/logo.png"

export const Header = () => (
  <Container>
    <Image src={Logo} alt="Logo of Breaking Bad" />
  </Container>
)
