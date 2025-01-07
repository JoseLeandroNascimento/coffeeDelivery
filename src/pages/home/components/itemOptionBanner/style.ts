import styled from "styled-components";
import { ItemBannerColor } from ".";

function colorCicleItemBanner(color: ItemBannerColor) {

    switch (color) {
        case ItemBannerColor.orange:
            return "yellow-900"
        case ItemBannerColor.yellow:
            return "yellow-300"
        case ItemBannerColor.gray:
            return "gray-600"
        case ItemBannerColor.purple:
            return "purple-300"
        default:
            return "purple-400"

    }

}

export const CicleItem = styled.span<{ color: ItemBannerColor }>`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #fff;
    background-color: ${props => props.theme[colorCicleItemBanner(props.color)]};

`

export const ItemBannerContent = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;

`