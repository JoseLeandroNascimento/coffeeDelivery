import styled from "styled-components";


export const EntregaFormContainer = styled.div`

    width: 40rem;
    background-color: ${props=>props.theme["gray-200"]};
    padding: 2.5rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
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

