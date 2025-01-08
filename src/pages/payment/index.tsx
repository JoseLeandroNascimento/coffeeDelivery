import { Content } from "../../styles/global";
import { EntregaForm } from "./components/entregaForm";
import { BoxLeft, BoxRight, ContainerPayment, Title } from "./style";


export function PaymentPage() {

    return (

        <Content>
            <ContainerPayment>

                <BoxLeft>
                    <Title>Complete seu pedido</Title>

                    <EntregaForm/>

                </BoxLeft>
                <BoxRight>
                    <Title>Cafés selecionados</Title>
                </BoxRight>

            </ContainerPayment>
        </Content>
    )
}