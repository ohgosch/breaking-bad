import React from "react"

import {
  Container,
  SectionTitle,
  CharactersList,
  Character,
  CharacterImage,
  CharacterName,
} from "./style"
import { characters } from "../../utils/texts"
import { Wrapper } from "../../styles/wrapper"
import { Spinner } from "../Spinner"

export const Characters = () => (
  <Container>
    <Wrapper>
      <SectionTitle>{characters.title}</SectionTitle>
      <CharactersList>
        <Character>
          <CharacterImage
            src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
            alt="Walter White"
          />
          <CharacterName>Walter White</CharacterName>
        </Character>
        <Character>
          <CharacterImage
            src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
            alt="Walter White"
          />
          <CharacterName>Walter White</CharacterName>
        </Character>
        <Character>
          <CharacterImage
            src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
            alt="Walter White"
          />
          <CharacterName>Walter White</CharacterName>
        </Character>
        <Character>
          <CharacterImage
            src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
            alt="Walter White"
          />
          <CharacterName>Walter White</CharacterName>
        </Character>
        <Character>
          <CharacterImage
            src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
            alt="Walter White"
          />
          <CharacterName>Walter White</CharacterName>
        </Character>
        <Character>
          <CharacterImage
            src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
            alt="Walter White"
          />
          <CharacterName>Walter White</CharacterName>
        </Character>
      </CharactersList>
      <Spinner />
    </Wrapper>
  </Container>
)
