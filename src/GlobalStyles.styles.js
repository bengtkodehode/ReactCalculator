import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        font-weight: 700;
        background-color: ${(props) => props.theme.MainBackground};
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'League Spartan', sans-serif;
    }
`
