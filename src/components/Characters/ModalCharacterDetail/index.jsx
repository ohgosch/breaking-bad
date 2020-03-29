import React from "react"

import {
  Container,
  Image,
  Content,
  Name,
  Nickname,
  DescriptionWrapper,
  DescriptionRow,
  DescriptionTitle,
  DescriptionText,
} from "./style"
import { modalCharacterDetail } from "../../../utils/texts"

const calculeAge = birthday => {
  var ageDifMs = Date.now() - birthday.getTime()
  var ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export const ModalCharacterDetail = ({
  name,
  nickname,
  appearance,
  birthday,
  occupation,
  portrayed,
  img,
}) => {
  const age = calculeAge(new Date(birthday))

  return (
    <Container>
      <Image src={img} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Nickname>{nickname}</Nickname>
        <DescriptionWrapper>
          {!!age && (
            <DescriptionRow>
              <DescriptionTitle>{modalCharacterDetail.age}</DescriptionTitle>
              <DescriptionText>
                {modalCharacterDetail.ageText(age)}
              </DescriptionText>
            </DescriptionRow>
          )}
          {!!occupation.length && (
            <DescriptionRow>
              <DescriptionTitle>
                {modalCharacterDetail.occupation}
              </DescriptionTitle>
              <DescriptionText>
                {modalCharacterDetail.occupationText(occupation)}
              </DescriptionText>
            </DescriptionRow>
          )}
          {!!portrayed && (
            <DescriptionRow>
              <DescriptionTitle>
                {modalCharacterDetail.portrayed}
              </DescriptionTitle>
              <DescriptionText>{portrayed}</DescriptionText>
            </DescriptionRow>
          )}
          {!!appearance.length && (
            <DescriptionRow>
              <DescriptionTitle>
                {modalCharacterDetail.seasonAppearance}
              </DescriptionTitle>
              <DescriptionText>
                {modalCharacterDetail.seasonAppearanceText(appearance)}
              </DescriptionText>
            </DescriptionRow>
          )}
        </DescriptionWrapper>
      </Content>
    </Container>
  )
}
