import styled from 'styled-components'

export const AppContainer = styled.div`
    max-width: 500px;
    min-width: 300px;
    margin: 2rem auto;
    padding: 1.5em;
    border-radius: 8px;
    background-color: hsl(223, 31%, 20%);
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
`;