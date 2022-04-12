import styled from 'styled-components'

export const AppContainer = styled.div`
    display: grid;
    max-width: 375px;
    margin: 2rem auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    background-color: hsl(223, 31%, 20%);
`;