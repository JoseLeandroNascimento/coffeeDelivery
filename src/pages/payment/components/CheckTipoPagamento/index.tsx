import { HtmlHTMLAttributes, ReactNode } from "react";
import { CheckBoxContainer } from "./style";

export interface CheckTipoPagamentoProps extends HtmlHTMLAttributes<HTMLInputElement>{
    type?: "checkbox";
    label: string,
    children: ReactNode
}


export function CheckTipoPagamento({type="checkbox",label,children,...rest}:CheckTipoPagamentoProps){

    return (
        <CheckBoxContainer>
            <div className="content">
                {children}
                <span>{label}</span>
            </div>
            <input type={type} {...rest}/>
        </CheckBoxContainer>
    )
}