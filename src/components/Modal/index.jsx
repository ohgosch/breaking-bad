import React from "react"
import PropTypes from "prop-types"

import { Container, Content, Close } from "./style"
import { modal } from "../../utils/texts"

export const Modal = ({ children, close, opened }) => (
  <Container opened={opened}>
    <Content>
      <Close title={modal.close} onClick={close} />
      {children}
    </Content>
  </Container>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  opened: PropTypes.bool,
}

Modal.defaultProps = {
  opened: false,
}
