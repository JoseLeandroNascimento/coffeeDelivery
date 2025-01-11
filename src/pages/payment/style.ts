import styled from "styled-components";

export const Title = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: .1875rem;
    color: ${props=>props.theme["gray-400"]};
`

export const ContainerPayment = styled.div`
    display: flex;
    gap: 2rem;
`

export const BoxLeft = styled.div`

    display: flex;
    flex-direction: column;
    gap: .75rem;

`

export const BoxRight = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: .75rem;
`