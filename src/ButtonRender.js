import { StyledButton, StyledButtonSecondary, StyledButtonSingular } from './components/styles/Button.styles'

const buttonValues = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'RESET', '=']

export const Buttons = buttonValues.map((btn, i) => {
  if (btn === 'RESET' || btn === 'DEL') {
    return <StyledButtonSecondary value={btn} key={i}></StyledButtonSecondary>
  } else if (btn === '=') {
    return <StyledButtonSingular value={btn} key={i}></StyledButtonSingular>
  } else {
    return <StyledButton value={btn} key={i}></StyledButton>
  }
})
