import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.5em;
  border-radius: 8px;
  background-color: ${(props) => props.theme.KeypadBackground};
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(5, 60px);
  gap: 1em;

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 100px);
    gap: 1.5em;
  }
`

export const StyleContainer = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 800px) {
    max-width: 560px;
  }
`
