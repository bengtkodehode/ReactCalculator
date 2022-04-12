import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Spartan', sans-serif;
        font-weight: 700;
        background-color: hsl(222, 26%, 31%);
    }
    
    h1 {
        margin: 0;
        padding: 0;
    }
`;