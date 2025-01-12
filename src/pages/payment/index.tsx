import { Content } from "../../styles/global";
import { EntregaForm } from "./components/entregaForm";
import { ResumoPedido } from "./components/ResumoPedido";
import { TipoPagamentoForm } from "./components/tipoPagamentoForm";
import { BoxLeft, BoxRight, ContainerPayment, Title } from "./style";


export function PaymentPage() {

    return (

        <Content>
            <ContainerPayment>

                <BoxLeft>
                    <Title>Complete seu pedido</Title>

                    <EntregaForm/>
                    <TipoPagamentoForm/>

                </BoxLeft>
                <BoxRight>
                    <Title>Cafés selecionados</Title>
                    <ResumoPedido/>
                </BoxRight>

            </ContainerPayment>
        </Content>
    )
}