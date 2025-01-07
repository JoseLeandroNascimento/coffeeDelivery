import styled from "styled-components";


export const Card = styled.div`

    box-sizing: border-box;
    position: relative;
    width: 16rem;
    height: 19.37rem;
    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px 36px  6px 36px;

`

export const CardHeader = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    

    & img{

        width: 7.5rem;
        height: 7.5rem;
        margin-top: -2rem;
    }

`

export const CardBody = styled.div`

    display: flex;
    flex-direction: column;
    margin: 1rem 1.25rem;
    

`

export const LabelCard = styled.h3`

    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme["gray-400"]};
    line-height: 1.9;
`

export const DescriptionCard = styled.p`

    text-align: center;
    font-size: .875rem;
    font-family: 400;
    color: ${props => props.theme["gray-300"]};
    max-lines: 1;
    max-width: 100%;
    text-overflow: ellipsis;

    
`
export const FooterCard = styled.div`

    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin: 1.4rem 0;
    width: 100%;

`

export const RowCard = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const ListChip = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: .75rem;
    gap: .25rem;
`

export const Chip = styled.span`

    padding: .25rem .5rem;
    color: ${props => props.theme["yellow-900"]};
    background-color: ${props => props.theme["yellow-100"]};
    font-weight: 500;
    border-radius: 2rem;
    font-size: .75rem;
    
`


export const PriceLabel = styled.strong`
    color: ${props => props.theme["gray-400"]};
    font-weight: 600;
    font-size: 1.5rem;

    &::before{

        content: "R$";
        color: ${props => props.theme["gray-300"]};
        font-weight: 400;
        font-size: .9rem;
        margin-right: .2rem;

    }

`

export const ButtonAddCart = styled.button`

    cursor: pointer;
    border: none;
    background-color: ${props => props.theme["purple-900"]};
    color: #fff;
    border-radius: 6px;
    padding: .5rem;
    line-height: 0;
`