import React from "react"
import { StyledButton } from "../src/components/Button.style"
import { AppContainer } from "../src/components/container.style"
import { GlobalStyles } from "./GlobalStyles.style"
import { InputDisplay } from "./components/InputDisplay.styles"

export default function App() {


const buttonValues = [
    7,8,9,'DEL',
    4,5,6,"+",
    1,2,3,"-",
    ".",0,"/","x",
    "RESET","="
]

const Buttons = buttonValues.map((btn, i) => {
    return (
        <StyledButton 
        value={btn} key={i}> 
        </StyledButton>
    )
})

return (
    <>
    <InputDisplay />
    <AppContainer>
        <GlobalStyles />
        {Buttons}
    </AppContainer>
    </>
    
)
}

