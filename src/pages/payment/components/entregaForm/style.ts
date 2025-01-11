import styled from "styled-components";

export const CardFormEntrega = styled.div`
    width: 40rem;
    background-color: ${props => props.theme["gray-200"]};
    padding: 2.5rem;
    border-radius: 6px;

`

export const EntregaFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`

export const HeaderForm = styled.div`

    display: grid;
    grid-template-columns: auto 1fr;
    gap: .715rem ;
    margin-bottom: 2rem;

    & svg{

        color: ${props => props.theme["yellow-900"]};;
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


export const Group1 = styled.div`

    display: flex;
    gap: .75rem;

`

export const Group2 = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: .75rem;
`

export const Group3 = styled.div`

    display: grid;
    grid-template-columns: auto 1fr;
    gap: .75rem;

`

export const Group4 = styled.div`
    display:grid;
    grid-template-columns: auto 1fr 3.75rem;
    gap: .75rem;

`

