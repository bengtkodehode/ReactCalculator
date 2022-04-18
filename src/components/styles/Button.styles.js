import styled from 'styled-components'
import Button from '../Button'

export const StyledButton = styled(Button)`
  padding: 1rem;
  font-size: 32px;
  font-weight: 700;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.PrimaryKeyColor};
  background-color: ${(props) => props.theme.PrimaryKeyBackground};
  box-shadow: 0px 4px 0px 0px ${(props) => props.theme.PrimaryKeyShadow};
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`

export const StyledButtonSingular = styled(StyledButton)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.SingularkeyColor};
  background-color: ${(props) => props.theme.SingularkeyBackground};
  box-shadow: 0px 4px 0px 0px ${(props) => props.theme.SingularkeyShadow};
  grid-column: 3 / span 2;
`

export const StyledButtonSecondary = styled(StyledButton)`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.SecondarykeyColor};
  background-color: ${(props) => props.theme.SecondarykeyBackground};
  box-shadow: 0px 4px 0px 0px ${(props) => props.theme.SecondarykeyShadow};

  &:nth-last-of-type(2) {
    grid-column: 1 / span 2;
  }
`
