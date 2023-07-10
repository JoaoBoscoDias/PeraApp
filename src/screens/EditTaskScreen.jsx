import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/style";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";



export default function EditTaskScreen({ navigation, route }) {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [idTask, setIdTask] = useState('')
    const { task } = route.params; // nunca funciona!!!
    useEffect(() => {
        console.log(task);
        setTitulo(task.titulo);
        setDescricao(task.descricao);
        setIdTask(task.id);
    }, [task])

    async function updateTaskToFirestore() {
        try {

            // utilizamos a função doc para referenciar um documento
            // neste caso estamos usando o idTask para referenciar o documento
            const taskRef = doc(db, 'tarefas', idTask);

            updateDoc(taskRef, {
                titulo: titulo,
                descricao: descricao
            })

            navigation.goBack();
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
            >Editar Tarefa</Text>
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
                onPress={updateTaskToFirestore}
                icon={"plus"}
            >Atualizar Tarefa</Button>
        </View>
    )
}