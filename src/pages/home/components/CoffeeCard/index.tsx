import { ButtonAddCart, Card, CardBody, CardHeader, Chip, DescriptionCard, FooterCard, LabelCard, ListChip, PriceLabel, RowCard } from "./style";
import coffee1 from "../../../../assets/coffee-1.svg"
import { CountItem } from "../../../../components/countItem";
import { ShoppingCart } from "@phosphor-icons/react";
import { GrouRow } from "../../../../styles/global";

export function CoffeeCard() {

    return (
        <Card>
            <CardHeader>
                <img src={coffee1} />
                <ListChip>
                    <Chip>
                        TRADICIONAL
                    </Chip>
                    <Chip>
                        COM LEITE
                    </Chip>
                </ListChip>
            </CardHeader>
            <CardBody>

                <LabelCard>
                    Expresso Tradicional
                </LabelCard>

                <DescriptionCard>
                    O tradicional café feito com água quente e grãos moídos
                </DescriptionCard>

            </CardBody>
            <FooterCard>
                <RowCard>
                    <PriceLabel>
                        9,90
                    </PriceLabel>

                    <GrouRow>
                        <CountItem />
                        <ButtonAddCart>
                            <ShoppingCart size={20} weight="fill" />
                        </ButtonAddCart>
                    </GrouRow>
                </RowCard>
            </FooterCard>
        </Card>
    )
}