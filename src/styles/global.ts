
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto" ,sans-serif;
    }


`

export const Content = styled.div`
   
   max-width: 70rem;
   margin: 0 auto;

`

export const GrouRow = styled.div`
    display: flex;
    gap: .5rem;
`

export const InputText = styled.input`

    border-radius: 4px;
    border: 1px solid ${props=>props.theme["gray-250"]};
    background: ${props=>props.theme["gray-100"]};
    outline: none;
    padding: .75rem;

    &::placeholder{

        font-size: .875rem;
        font-weight: 400;
    }


`