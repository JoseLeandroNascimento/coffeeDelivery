import { ReactNode } from "react";
import { CheckBoxContainer } from "./style";

export interface CheckTipoPagamentoProps{

    label: string,
    children: ReactNode
}


export function CheckTipoPagamento({label,children}:CheckTipoPagamentoProps){
    return (
        <CheckBoxContainer>
            <div className="content">
                {children}
                <span>{label}</span>
            </div>
            <input type="checkbox" />
        </CheckBoxContainer>
    )
}