import React from "react";
import * as C from './styles'

export default function AppItem(props) {
    return(
        <C.Container>
            <C.TextItem>{props.item}</C.TextItem>
            <C.ContainerBtn>
                <C.DelBtn>
                    <C.BtnText>X</C.BtnText>
                </C.DelBtn>
                <C.EditBtn>
                    <C.BtnText>Editar</C.BtnText>
                </C.EditBtn>
            </C.ContainerBtn>
        </C.Container>
    )
}