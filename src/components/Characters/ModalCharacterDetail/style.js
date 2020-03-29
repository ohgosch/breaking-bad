import styled, { css } from "styled-components"

import { Title, Subtitle, BodyText } from "../../../styles/typography"
import { tabletDesktop, mobile } from "../../../styles/medias"
import { COLORS } from "../../../utils/constants"
import { Wrapper } from "../../../styles/wrapper"

export const Container = styled.div`
  ${mobile(css`
    margin: -20px -15px 0 -15px;
    /* width: calc(100% + 30px); */
    position: relative;
  `)}

  ${tabletDesktop(css`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `)}
`

export const Image = styled.img`
  ${mobile(css`
    /* margin: -20px -15px 0 -15px; */
    width: calc(100% + 30px);
  `)}

  ${tabletDesktop(css`
    width: 100%;
    margin: -20px 0 -20px -15px;
  `)}
`

export const Content = styled(Wrapper)`
  ${tabletDesktop(css`
    margin: 0;
  `)}

  ${mobile(css`
    margin-top: 20px;
  `)}
`

export const Name = styled(Title)`
  color: ${COLORS.blackLight};
`

export const Nickname = styled(Subtitle)`
  color: ${COLORS.blackLightGrey};
`

export const DescriptionWrapper = styled.div`
  margin-top: 20px;
`

export const DescriptionRow = styled.div`
  display: flex;
  margin-bottom: 8px;
`

export const DescriptionTitle = styled(BodyText)`
  font-weight: bold;
  margin-right: 5px;
`

export const DescriptionText = styled(BodyText)``
