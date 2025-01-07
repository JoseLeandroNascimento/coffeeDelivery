import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { CartButton, GroupRow, Header, LocaleIndicator } from "./style"

export function HomePage() {

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
                        <ShoppingCart size={20}  weight="fill" />
                    </CartButton>
                </GroupRow>
            </Header>

            <p></p>

        </>
    )
}