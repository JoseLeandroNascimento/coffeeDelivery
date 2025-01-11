import { HtmlHTMLAttributes, ReactNode } from "react";
import { CheckBoxContainer } from "./style";

export interface CheckTipoPagamentoProps extends HtmlHTMLAttributes<HTMLInputElement>{

    label: string,
    children: ReactNode
}


export function CheckTipoPagamento({label,children,...rest}:CheckTipoPagamentoProps){

    return (
        <CheckBoxContainer>
            <div className="content">
                {children}
                <span>{label}</span>
            </div>
            <input type="checkbox" {...rest}/>
        </CheckBoxContainer>
    )
}