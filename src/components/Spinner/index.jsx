import React from "react"

import { Container, Image } from "./style"

import SpinnerImage from "../../images/spinner.svg"

export const Spinner = () => (
  <Container aria-hidden={true}>
    <Image src={SpinnerImage} aria-hidden={true} />
  </Container>
)
