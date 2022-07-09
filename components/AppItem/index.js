import React from "react";
import * as C from './styles';
import { Feather as Icon } from '@expo/vector-icons';
import Database from '../../Database';
import { Alert } from "react-native";

export default function AppItem(props) {
    async function handleEditPress(){ 
        const item = await Database.getItem(props.id);
        props.navigation.navigate("AppForm", item);
    }

    function handleDeletePress() {
        Alert.alert(
            "Atenção",
            "Tem certeza que deseja excluir esse item?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => {
                        Database.deleteItem(props.id)
                            .then(response => props.navigation.navigate("AppList", {id: props.id}));
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return(
        <C.Container>
            <C.TextItem>{props.titulo}</C.TextItem>
            <C.TextItem>{props.descricao}</C.TextItem>
            <C.ContainerBtn>
                <C.DelBtn onPress={handleDeletePress}>
                    <Icon name="trash" color="white" size={18} />
                </C.DelBtn>
                <C.EditBtn onPress={handleEditPress}>
                    <Icon name="edit" color="white" size={18} />
                </C.EditBtn>
            </C.ContainerBtn>
        </C.Container>
    )
}