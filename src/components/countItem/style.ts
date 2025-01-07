import styled from "styled-components";


export const ButtonAction = styled.button`
    border: none;
    cursor: pointer;
    background: transparent;
    color: ${props=>props.theme["purple-300"]};

`

export const LabelPrice = styled.span`

    font-size: 1rem;
    font-weight: 500;
    color: ${props=>props.theme["gray-400"]};

`

export const CountContainer = styled.div`

    display: flex;
    justify-content: space-between;
    gap: .218rem;
    background-color: ${props=>props.theme["gray-250"]};
    padding: .53rem  .5rem;
    border-radius: 6px;
`