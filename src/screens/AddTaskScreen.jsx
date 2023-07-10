import { useState } from "react";
import { View } from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/style";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";


export default function AddTaskScreen() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    async function addTaskToFirestore() {
        try {
            const taskRef = collection(db, 'tarefas');
            const payload = await addDoc(taskRef, {
                titulo: titulo,
                descricao: descricao
            })
            console.log(payload)


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View
            style={styles.container}
        >
            <Text
                variant="headlineLarge"
            >Adicionar Tarefa</Text>
            <Divider />
            <TextInput
                label="Título"
                value={titulo}
                onChangeText={setTitulo}
                style={styles.selfFullWidth}
            />
            <Divider style={styles.divider} />
            <TextInput
                label="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                style={styles.selfFullWidth}
            />
            <Divider style={styles.divider} />
            <Button
                mode="contained"
                onPress={addTaskToFirestore}
                icon={"plus"}
            >Adicionar Tarefa</Button>
        </View>
    )
}