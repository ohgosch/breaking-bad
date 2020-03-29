import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 30px;
  height: 30px;
  margin: 50px auto;
  align-items: center;
  justify-content: center;
  display: flex;
  animation: ${rotate} 2s linear infinite;
`

export const Image = styled.img`
  display: block;
`
