import styled, { css, keyframes } from "styled-components"

import { COLORS } from "../../utils/constants"
import { tabletDesktop } from "../../styles/medias"
import closeImage from "../../images/close.svg"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  background-color: ${COLORS.blackTransparent};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  z-index: 50;

  ${p =>
    p.opened &&
    css`
      animation: ${fadeIn} 0.2s linear;
      opacity: 1;
      pointer-events: auto;
    `}
`

export const CloseOverlay = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: transparent;
  border: none;
  width: 100%;
`

export const Content = styled.section`
  background-color: ${COLORS.white};
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 50px;
  padding: 20px 15px;

  ${tabletDesktop(css`
    border-radius: 8px;
    width: 560px;
    max-height: 400px;
  `)}
`

export const Close = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  background-image: url(${closeImage});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`
