import styled from "styled-components";

export const CheckBoxContainer = styled.label`

    padding: 1rem;
    display: inline-block;
    background-color: ${props => props.theme["gray-250"]};
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;
    min-width: 11.14rem;


    &:hover{
        background-color: ${props => props.theme["gray-270"]};
    }

    &:has(input[type=checkbox]:checked){
       border: 1px solid ${props=>props.theme["purple-300"]};
       background-color: ${props=>props.theme["purple-100"]};
    }


    & input[type=checkbox]{

        display: none;
    }

    & div.content{

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .75rem;

        span{
            font-size:.75rem;
            color: ${props => props.theme["gray-400"]};
        }

        svg{

            color: ${props => props.theme["purple-300"]};
        }

    }

`