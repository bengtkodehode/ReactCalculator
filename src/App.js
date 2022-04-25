import React, { useState } from 'react'
import { GlobalStyles } from './GlobalStyles.styles'
import { HeaderContainer } from './components/HeaderContainer'
import { StyledTitle } from './components/styles/Title.styled'
import { InputRange } from './components/styles/InputRange.styles'
import { ThemeProvider } from 'styled-components'
import { DisplayContainer } from './components/DisplayContainer'
import { BlueTheme, GrayTheme, PurpleTheme } from './components/styles/Themes.styles'
import { Buttons } from './ButtonRender'
import { ButtonContainer, StyleContainer } from './components/ButtonContainer'
import { InputRangeContainer } from './components/styles/InputRangeContainer.styles'
import { InputRangeNumber, InputRangeNumberTwo, InputRangeNumberThree } from './components/styles/InputRangeNumbers.styles'

export default function App() {
  const [theme, setTheme] = useState({ value: '1' })

  const changeTheme = (e) => {
    const { value } = e.target
    setTheme((prevTheme) => {
      return { ...prevTheme, value }
    })
  }

  return (
    <ThemeProvider theme={theme.value === '1' ? BlueTheme : theme.value === '2' ? GrayTheme : PurpleTheme}>
      <StyleContainer>
        <GlobalStyles />
        <HeaderContainer>
          <StyledTitle />
          <InputRangeContainer>
            <InputRangeNumber>1</InputRangeNumber>
            <InputRangeNumberTwo>2</InputRangeNumberTwo>
            <InputRangeNumberThree>3</InputRangeNumberThree>
            <InputRange min={1} max={3} type="range" value={theme.value} onChange={changeTheme} />
            <label>THEME</label>
          </InputRangeContainer>
        </HeaderContainer>
        <DisplayContainer />
        <ButtonContainer>{Buttons}</ButtonContainer>
      </StyleContainer>
    </ThemeProvider>
  )
}
