import React, { useState } from 'react'
import { Buttons } from './ButtonRender'
import { ButtonContainer, StyleContainer } from './components/ButtonContainer'
import { GlobalStyles } from './GlobalStyles.styles'
import { DisplayContainer } from './components/DisplayContainer'
import { HeaderContainer } from './components/HeaderContainer'
import { ThemeProvider } from 'styled-components'
import { Title } from './components/styles/Title.styled'
import { InputRange } from './components/styles/InputRange.styles'
import { BlueTheme, GrayTheme, PurpleTheme } from './components/styles/Themes.styles'

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
          <Title onClick={() => setTheme(!theme)}>calc</Title>
          <InputRange min={1} max={3} type="range" value={theme.value} onChange={changeTheme} />
        </HeaderContainer>

        <DisplayContainer />

        <ButtonContainer>{Buttons}</ButtonContainer>
      </StyleContainer>
    </ThemeProvider>
  )
}
