import React from "react"

import { Container, Image, Title } from "./style"
import { header } from "../../utils/texts"

import Logo from "../../images/logo.png"

export const Header = () => (
  <Container>
    <Image src={Logo} alt={header.logoAlt} />
    <Title>{header.title}</Title>
  </Container>
)
