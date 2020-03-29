import React, { useEffect, useState } from "react"

import {
  Container,
  SectionTitle,
  CharactersList,
  Character,
  CharacterImage,
  CharacterName,
  CharacterButton,
} from "./style"
import { characters as charactersTexts } from "../../utils/texts"
import { Wrapper } from "../../styles/wrapper"
import { Spinner } from "../Spinner"
import { getCharacters } from "../../api/characters"
import { Modal } from "../Modal"
import { ModalCharacterDetail } from "./ModalCharacterDetail"

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpened, setModalOpened] = useState(false)
  const [characterSelected, setCharacterSelect] = useState({})

  const fetchCharacters = async () => {
    const { data } = await getCharacters()
    setCharacters(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  const selectCharacter = character => {
    setCharacterSelect(character)
    setModalOpened(true)
  }

  const clearCharacter = () => {
    setModalOpened(false)
    setCharacterSelect({})
  }

  return (
    <Container>
      <Wrapper>
        <SectionTitle>{charactersTexts.title}</SectionTitle>
        <CharactersList>
          {characters.map(character => {
            const { name, img, char_id: id } = character

            return (
              <Character key={id}>
                <CharacterImage src={img} alt={name} />
                <CharacterName>{name}</CharacterName>
                <CharacterButton onClick={() => selectCharacter(character)}>
                  {charactersTexts.buttonDetail(name)}
                </CharacterButton>
              </Character>
            )
          })}
        </CharactersList>
        {loading && <Spinner />}
      </Wrapper>
      <Modal opened={modalOpened} close={() => clearCharacter()}>
        {characterSelected.name && (
          <ModalCharacterDetail {...characterSelected} />
        )}
      </Modal>
    </Container>
  )
}
