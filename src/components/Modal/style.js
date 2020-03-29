import styled, { css, keyframes, createGlobalStyle } from "styled-components"

import { COLORS } from "../../utils/constants"
import { tabletDesktop, mobile } from "../../styles/medias"
import closeImage from "../../images/close.svg"

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }

  to {
    opacity: 1;
    margin-top: 0;
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
      animation: ${fadeIn} 0.2s ease-in;
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
    max-height: 90vh;
  `)}

  ${mobile(css`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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
  background-size: 12px;
  border: none;
  z-index: 10;
  background-color: ${COLORS.white};
  border-radius: 3px;
`
export const GlobalHidden = createGlobalStyle`
  body, html {
    overflow: hidden;
  }
`
