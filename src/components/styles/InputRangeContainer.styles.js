import styled from 'styled-components'

export const InputRangeContainer = styled.div`
  display: grid;
  color: ${(props) => props.theme.TitleColor};

  grid-template-areas:
    '.     text1       text2       text3'
    'lable inputrange inputrange inputrange';
`
