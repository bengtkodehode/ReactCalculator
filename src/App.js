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
  const [theme, setTheme] = useState(true)

  function handleClick() {
    console.log('I was clicked!')
  }

  return (
    <ThemeProvider theme={theme ? BlueTheme : PurpleTheme}>
      <StyleContainer>
        <GlobalStyles />
        <ThemeChanger>
          <Title onClick={() => setTheme(!theme)}>calc</Title>
        </ThemeChanger>

        <InputDisplay onClick={handleClick} />

        <ButtonContainer>{Buttons}</ButtonContainer>
      </StyleContainer>
    </ThemeProvider>
  )
}
