import styled, { css } from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 10rem;
`
export const ButtonBase = styled.button`
    border: 0;
    padding: .8rem 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`

export const LocaleIndicator = styled(ButtonBase)`
  
    background: ${(props) => props.theme["purple-100"]} ;
    gap: .25rem;
    color: ${(props) => props.theme["purple-300"]};
    font-size: 1rem;
  
`

export const CartButton = styled(ButtonBase) <{ $quantItem?: number }>`
    background: ${(props) => props.theme["yellow-100"]};
    padding: .8rem 1rem;
    color: ${(props) => props.theme["yellow-900"]};
    position: relative;

    &::after {
        content: "${(props) => (props.$quantItem ?? '')}"; 
        position: absolute;
        display:  ${(props) => (props.$quantItem && props.$quantItem > 0 ? 'flex' : 'none')};;
        justify-content: center;
        align-items: center;
        right: -8px;
        top: -8px;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        
        color: #ffff;
        background-color: ${(props) => props.theme["yellow-900"]};
    }
`

export const GroupRow = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;

`

