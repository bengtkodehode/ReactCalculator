import styled from "styled-components";
import Buttons from "./Button";

export const StyledButton = styled(Buttons)`
    width: 90px;
    height: 50px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 32px;
    box-shadow: 0px 3px 0px 0px hsl(28, 16%, 65%); 
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};

    &:hover{
       background-color: lightblue;
    }
`;

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: red;
`;


