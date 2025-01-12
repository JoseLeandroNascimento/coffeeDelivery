import styled from "styled-components";
import { ButtonBase } from "../../../../styles/global";


export const ResumoPedidoContainer = styled.div`

    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px 44px 6px 44px;
    padding: 2.5rem;
    width: 28rem;
    max-height: 31.125rem;
    
`

export const ResumoInfoContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const InfoPedidoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
`

export const LabelInfoPedido = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    & span{

        color: ${props=>props.theme["gray-400"]};
    }

    & span.label{
        font-size: .875rem;
    }

    & span.valor{
        font-size: 1rem;
    }
`

export const TotalPedido = styled(LabelInfoPedido)`

    font-weight: bold;  
    & span.label,span.valor{
        font-size: 1.25rem;
    } 
`

export const ButtonConfirmPedido = styled(ButtonBase)`

    background-color: ${props=>props.theme["yellow-300"]};
    color: #fff;
    font-size: .875rem;

    &:hover{
        background-color: ${props=>props.theme["yellow-900"]};
    }

`