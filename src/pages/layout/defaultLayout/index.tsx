import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartButton, GroupRow, Header, LocaleIndicator } from "../../home/style";
import { Outlet } from "react-router-dom";
import logo from "../../../assets/logo.svg"

export function DefaultLayout() {

    return (
        <>
            <Header>
                <img src={logo} alt="logo do coffee delivery" />
                <GroupRow>
                    <LocaleIndicator>
                        <MapPin size={20} weight="fill" />
                        <strong>Porto Alegre, RS</strong>
                    </LocaleIndicator>

                    <CartButton $quantItem={8}>
                        <ShoppingCart size={20} weight="fill" />
                    </CartButton>
                </GroupRow>
            </Header>

            <Outlet/>
        </>
    )
}