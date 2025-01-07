import logo from "../../assets/logo.svg"
import { Coffee, MapPin, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import { BackgroundLayer, Banner, CartButton, Container, Content, ContentLayer, GroupRow, Header, ListBeneficio, LocaleIndicator, SubtitleBanner, TitleBanner } from "./style"
import bannerCoffee from "../../assets/banner-coffee.svg"
import { ItemBannerColor, ItemOptionBanner } from "./components/itemOptionBanner"
import { CoffeeCard } from "./components/CoffeeCard"

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
                        <ShoppingCart size={20} weight="fill" />
                    </CartButton>
                </GroupRow>
            </Header>

            <Container>
                <Content>
                    <ContentLayer>

                        <Banner>
                            <div>
                                <TitleBanner>Encontre o café perfeito para qualquer hora do dia</TitleBanner>
                                <SubtitleBanner>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubtitleBanner>

                                <ListBeneficio>
                                    <ItemOptionBanner label="Compra simples e segura" color={ItemBannerColor.orange}>
                                        <ShoppingCart weight="fill" />
                                    </ItemOptionBanner>

                                    <ItemOptionBanner label="Embalagem mantém o café intacto" color={ItemBannerColor.gray}>
                                        <Package weight="fill" />
                                    </ItemOptionBanner>

                                    <ItemOptionBanner label="Entrega rápida e rastreada" color={ItemBannerColor.yellow}>
                                        <Timer weight="fill" />
                                    </ItemOptionBanner>

                                    <ItemOptionBanner label="O café chega fresquinho até você" color={ItemBannerColor.purple}>
                                        <Coffee weight="fill" />
                                    </ItemOptionBanner>
                                </ListBeneficio>
                            </div>

                            <img src={bannerCoffee} alt="café banner" />
                        </Banner>
                    </ContentLayer>
                </Content>
                <BackgroundLayer />

            </Container>

            <body>
                <Content>
                    <h3>Nossos cafés</h3>

                    <CoffeeCard/>
                </Content>

            </body>


        </>
    )
}