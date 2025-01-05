import logo from "../../assets/logo.svg"
import { MapPin } from "@phosphor-icons/react"
import { Header, LocaleIndicator } from "./style"

export function HomePage() {

    return (
        <>
            <Header>
                <img src={logo} alt="logo do coffee delivery" />
                <div>
                    <LocaleIndicator>
                        <MapPin size={24} weight="fill" />
                        Porto Alegre, RS
                    </LocaleIndicator>
                </div>
            </Header>

            <p></p>

        </>
    )
}