import styled from "styled-components";


export const CardFormTipoPagamento = styled.div`

    width: 40rem;
    background-color: ${props => props.theme["gray-200"]};
    padding: 2.5rem;
    border-radius: 6px;

`

export const HeaderForm = styled.div`

    display: grid;
    grid-template-columns: auto 1fr;
    gap: .715rem ;
    margin-bottom: 2rem;

    & svg{

        color: ${props => props.theme["purple-900"]};;
    }

`

export const TitleFormEntrega = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme["gray-600"]};
`

export const SubtitleFormEntrega = styled.p`
    font-size: .875rem;
    color: ${props => props.theme["gray-400"]};
`