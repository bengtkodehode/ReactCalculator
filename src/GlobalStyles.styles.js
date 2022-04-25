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
    label {
        align-self: center;
        margin-right: 1em;
        color: ${(props) => props.theme.TitleColor};
        grid-area: lable;
    }

`
