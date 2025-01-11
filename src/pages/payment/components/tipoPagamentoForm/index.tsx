import { CurrencyDollarSimple } from "@phosphor-icons/react";
import { CardFormTipoPagamento, HeaderForm, SubtitleFormEntrega, TitleFormEntrega } from "./style";


export function TipoPagamentoForm() {

    return (

        <CardFormTipoPagamento>
            <HeaderForm>
                <CurrencyDollarSimple size={20} />
                <div>
                    <TitleFormEntrega>Pagamento</TitleFormEntrega>
                    <SubtitleFormEntrega>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SubtitleFormEntrega>
                </div>
            </HeaderForm>
        </CardFormTipoPagamento>

    )

}