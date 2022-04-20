import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 700;
        font-family: 'League Spartan', sans-serif;
        background-color: ${(props) => props.theme.MainBackground};
    }

`
