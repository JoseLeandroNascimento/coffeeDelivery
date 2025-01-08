import styled from "styled-components"
import background from "../../assets/background-header.svg"



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

    & strong{
        color: ${(props) => props.theme["purple-900"]};
        font-weight: 400;

    }
  
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

export const Container = styled.div`
  position: relative;
  height: 34rem;
  width: 100%;
  
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1; 
  filter: blur(10px); 
`;

export const ContentLayer = styled.div`
  position: relative;
  z-index: 2;
`;

export const TitleBanner = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme["gray-400"]};

`

export const SubtitleBanner = styled.p`

    font-size: 1.25rem;
    font-weight: 400;

`

export const Banner = styled.div`

    display: flex;
    justify-content: center;
    gap: 3.5rem;

`

export const ListBeneficio = styled.div`
    margin-top: 4.1rem;
    width: max-content;
    display: grid;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
`

export const ListCoffee= styled.div`

    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(16rem,1fr));
    row-gap: 2.5rem;
    column-gap: 2rem;
    margin-top: 3.37rem;
`
