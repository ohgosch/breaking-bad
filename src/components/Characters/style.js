import styled, { css } from "styled-components"

import { Title, Subtitle } from "../../styles/typography"
import { COLORS } from "../../utils/constants"
import { tablet, mobile, desktop } from "../../styles/medias"

export const Container = styled.section``

export const SectionTitle = styled(Title)`
  color: ${COLORS.white};
`

export const CharactersList = styled.div`
  display: grid;
  margin-top: 10px;
  justify-content: center;
  grid-row-gap: 20px;
  padding-bottom: 50px;
  
  ${mobile(css`
    grid-column-gap: 6px;
    grid-template-columns: 1fr 1fr;
  `)}
    
    ${tablet(css`
      grid-column-gap: 55px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    `)}

  ${desktop(css`
    grid-column-gap: 25px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  `)}
`

export const Character = styled.article`
  position: relative;
  max-width: 180px;
  margin: 0 auto;
  background-color: ${COLORS.greenDark};
`

export const CharacterImage = styled.img`
  width: auto;
  height: auto;
  display: block;
`

export const CharacterName = styled(Subtitle)`
  color: ${COLORS.white};
  padding: 5px;
  background-color: ${COLORS.greenDarkTransparent};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
