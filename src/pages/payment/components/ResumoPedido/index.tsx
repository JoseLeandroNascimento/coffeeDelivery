import { ButtonConfirmPedido, InfoPedidoContainer, LabelInfoPedido, ResumoInfoContainer, ResumoPedidoContainer, TotalPedido } from "./style";


export function ResumoPedido() {

    return (
        <ResumoPedidoContainer>
            <ResumoInfoContainer>
                <InfoPedidoContainer>
                    <LabelInfoPedido>
                        <span className="label">Total de itens</span>
                        <span className="valor">R$ 29,70</span>
                    </LabelInfoPedido>
                    <LabelInfoPedido>
                        <span className="label">Entrega</span>
                        <span className="valor">R$ 3,50</span>
                    </LabelInfoPedido>
                    <TotalPedido>
                        <span className="label">Total</span>
                        <span className="valor">R$ 33,20</span>
                    </TotalPedido>
                </InfoPedidoContainer>
                <ButtonConfirmPedido>
                    CONFIRMAR PEDIDO
                </ButtonConfirmPedido>
            </ResumoInfoContainer>
        </ResumoPedidoContainer>
    )
}