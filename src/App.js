import React, { useState } from 'react'
import { Buttons } from './ButtonRender'
import { ButtonContainer, StyleContainer } from './components/ButtonGrid'
import { GlobalStyles } from './GlobalStyles.styles'
import { InputDisplay } from './components/InputDisplay'
import { ThemeChanger } from './components/ThemeChanger'
import { BlueTheme, GrayTheme, PurpleTheme } from './components/styles/Themes.styles'
import { ThemeProvider } from 'styled-components'
import { Title } from './components/styles/Title.styled'

export default function App() {
  const [theme, setTheme] = useState(1)

  return (
    <ThemeProvider theme={theme === 1 ? BlueTheme : PurpleTheme}>
      <StyleContainer>
        <GlobalStyles />
        <ThemeChanger>
          <Title>calc</Title>
        </ThemeChanger>

        <InputDisplay />

        <ButtonContainer>{Buttons}</ButtonContainer>
      </StyleContainer>
    </ThemeProvider>
  )
}
