import { InputText } from "../../../../styles/global";
import { EntregaFormContainer, Group1, Group2, Group3, Group4 } from "./style";

export function EntregaForm() {
    return (

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
    )
}