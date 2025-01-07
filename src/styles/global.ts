
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto" ,sans-serif;
    }


`

export const GrouRow = styled.div`
    display: flex;
    gap: .5rem;
`