import { createGlobalStyle, css } from "styled-components"
import { COLORS } from "../utils/constants"
import { RobotoSlab } from "../utils/font"

import background from "../images/background.png"

export const GlobalStyle = createGlobalStyle`
  ${RobotoSlab}

  body, html {
    background-color: ${COLORS.blackLight};
    min-height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  * {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`
