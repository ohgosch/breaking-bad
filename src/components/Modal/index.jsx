import React from "react"
import PropTypes from "prop-types"

import { Container, Content, Close, CloseOverlay, GlobalHidden } from "./style"
import { modal } from "../../utils/texts"

export const Modal = ({ children, close, opened }) => (
  <Container opened={opened} aria-hidden={!opened}>
    {/* When opened, block scroll in body */}
    {opened && <GlobalHidden />}

    {/* Button overlay for close the modal */}
    <CloseOverlay onClick={close}>{modal.close}</CloseOverlay>

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
