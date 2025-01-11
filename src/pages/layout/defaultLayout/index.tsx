import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartButton, GroupRow, Header, LocaleIndicator } from "../../home/style";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { ContainerLayoutDafault } from "./style";

export function DefaultLayout() {

    return (
        <ContainerLayoutDafault>
            <Header>
                <NavLink to="/">
                    <img src={logo} alt="logo do coffee delivery" />
                </NavLink>
                <GroupRow>
                    <LocaleIndicator>
                        <MapPin size={20} weight="fill" />
                        <strong>Porto Alegre, RS</strong>
                    </LocaleIndicator>
                    <NavLink to="payment">
                        <CartButton $quantItem={8}>
                            <ShoppingCart size={20} weight="fill" />
                        </CartButton>
                    </NavLink>
                </GroupRow>
            </Header>

            <Outlet />
        </ContainerLayoutDafault>
    )
}