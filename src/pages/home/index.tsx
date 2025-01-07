import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import bannerCoffee from "../../assets/banner-coffee.svg"
import { CoffeeCard } from "./components/CoffeeCard"
import { ItemBannerColor, ItemOptionBanner } from "./components/itemOptionBanner"
import { TitlePage } from "./components/itemOptionBanner/style"
import { BackgroundLayer, Banner, Container, Content, ContentLayer, ListBeneficio, ListCoffee, SubtitleBanner, TitleBanner } from "./style"

export function HomePage() {

    return (
        <>

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
                    <TitlePage>Nossos cafés</TitlePage>

                    <ListCoffee>
                        <CoffeeCard />
                        <CoffeeCard />
                        <CoffeeCard />
                        <CoffeeCard />

                        <CoffeeCard />
                        <CoffeeCard />
                        <CoffeeCard />
                        <CoffeeCard />

                        <CoffeeCard />
                        <CoffeeCard />
                        <CoffeeCard />
                        <CoffeeCard />

                        <CoffeeCard />
                        <CoffeeCard />
                        

                    </ListCoffee>
                </Content>

            </body>


        </>
    )
}