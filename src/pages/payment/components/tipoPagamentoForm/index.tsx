import { Bank, CreditCard, CurrencyDollarSimple, Money } from "@phosphor-icons/react";
import { CardFormTipoPagamento, ContainerListTipoPagamento, HeaderForm, SubtitleFormEntrega, TitleFormEntrega } from "./style";
import { CheckTipoPagamento } from "../CheckTipoPagamento";


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
            <form >
                <ContainerListTipoPagamento>
                    <CheckTipoPagamento label="CARTÃO DE CRÉDITO">
                        <CreditCard />
                    </CheckTipoPagamento>
                    <CheckTipoPagamento label="CARTÃO DE DÉBITO">
                        <Bank />
                    </CheckTipoPagamento>
                    <CheckTipoPagamento label="DINHEIRO"  >
                        <Money />
                    </CheckTipoPagamento>
                </ContainerListTipoPagamento>
            </form>
        </CardFormTipoPagamento>

    )

}