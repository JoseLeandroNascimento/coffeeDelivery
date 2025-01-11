import { MapPinLine } from "@phosphor-icons/react";
import { InputText } from "../../../../styles/global";
import { CardFormEntrega, EntregaFormContainer, Group1, Group2, Group3, Group4, HeaderForm, SubtitleFormEntrega, TitleFormEntrega } from "./style";

export function EntregaForm() {
    return (
        <CardFormEntrega>

            <HeaderForm>
                <MapPinLine size={20} />
                <div>
                    <TitleFormEntrega>Endereço de Entrega</TitleFormEntrega>
                    <SubtitleFormEntrega>Informe o endereço onde deseja receber seu pedido</SubtitleFormEntrega>
                </div>
            </HeaderForm>

            <form >

                <EntregaFormContainer>


                    <Group1>
                        <InputText placeholder="CEP" />
                    </Group1>

                    <Group2>
                        <InputText placeholder="Rua" />
                    </Group2>

                    <Group3>
                        <InputText placeholder="Número" />
                        <InputText placeholder="Complemento" />
                    </Group3>

                    <Group4>
                        <InputText placeholder="Bairro" />

                        <InputText placeholder="Cidade" />

                        <InputText placeholder="UF" />
                    </Group4>


                </EntregaFormContainer>
            </form>

        </CardFormEntrega>


    )
}