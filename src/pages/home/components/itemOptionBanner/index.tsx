import { ReactNode } from "react";
import { CicleItem, ItemBannerContent } from "./style";

export enum ItemBannerColor{
    orange = "orange",
    yellow = "yellow",
    gray = "gray",
    purple = "purple"
}

export interface ItemOptionBannerProps{
    label: string,
    color: ItemBannerColor,
    children?: ReactNode
   
}

export function ItemOptionBanner({label,color,children}: ItemOptionBannerProps) {

    return (

        <ItemBannerContent>
            <CicleItem color={color}>
               {children}
            </CicleItem>
            <span>{label}</span>
        </ItemBannerContent>

    )
}