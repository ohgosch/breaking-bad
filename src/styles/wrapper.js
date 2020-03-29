import styled, { css } from "styled-components"
import { mobile, tablet, desktop } from "./medias"
import { RESOLUTIONS } from "../utils/constants"

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${mobile(css`
    width: 90%;
    max-width: ${RESOLUTIONS.mobile.max};
  `)}

  ${tablet(css`
    width: 88%;
    max-width: ${RESOLUTIONS.tablet.max};
  `)}

  ${desktop(css`
    width: 90%;
    max-width: ${RESOLUTIONS.desktop.min};
  `)}
`
