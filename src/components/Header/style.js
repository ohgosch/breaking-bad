import styled from "styled-components"

export const Container = styled.header`
  height: 144px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const Image = styled.img`
  max-width: 180px;
  flex-grow: 1;
`

export const Title = styled.h1`
  position: absolute;
  left: -9999pc;
  top: -9999pc;
  opacity: 0;
`
