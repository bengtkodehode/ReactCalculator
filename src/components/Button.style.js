import styled from "styled-components";
import Buttons from "./Button";

export const StyledButton = styled(Buttons)`
    width: 90px;
    height: 50px;
    padding: 15px;
    border: 0;
    border-radius: 5px;
    font-size: 32px;
    box-shadow: 0px 3px 0px 0px hsl(28, 16%, 65%); 
    background-color: hsl(30, 25%, 89%);
    color: hsl(221, 14%, 31%);
    
    ${props => console.log(props.value === "=")};
    ${props => props.value === "=" && "background-color: hsl(6, 63%, 50%);"};
    ${props => props.value === "=" && "box-shadow: 0px 3px 0px 0px hsl(6, 70%, 34%);"};
    ${props => props.value === "=" && "color: hsl(0, 0%, 100%);"};
    
    &:hover{
       background-color: lightblue;
    }
`;

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: red;
`;


