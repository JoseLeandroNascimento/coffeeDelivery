import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonAction, CountContainer, LabelPrice } from "./style";
import { useState } from "react";


export function CountItem() {
    const [count, setCount] = useState(1)

    function addItem() {

        setCount(state => state + 1)
    }

    function removeItem() {

        if (count > 1) {
            setCount(state => state - 1)
        }
    }
    return (

        <CountContainer>
            <ButtonAction onClick={removeItem}>
                <Minus size={20} />
            </ButtonAction>
            <LabelPrice>{count}</LabelPrice>
            <ButtonAction onClick={addItem}>
                <Plus size={20} />
            </ButtonAction>
        </CountContainer>
    )
}