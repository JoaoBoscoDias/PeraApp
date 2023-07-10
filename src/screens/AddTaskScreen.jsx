import { useState } from "react";
import { View } from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/style";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function AddTaskScreen() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  async function addTaskToFirestore() {
    try {
      const taskRef = collection(db, "tarefas");
      const payload = await addDoc(taskRef, {
        titulo: titulo,
        descricao: descricao,
      });
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Adicionar Tarefa</Text>
      <Divider />
      <TextInput 
        label="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.selfFullWidth}
        underlineColor="#F8F9FA"
        activeUnderlineColor="#F8F9FA"
      />
      <Divider style={styles.divider} />
      <TextInput
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.selfFullWidth}
        underlineColor="#F8F9FA"
        activeUnderlineColor="#F8F9FA"
      />
      <Divider style={styles.divider} />
      <Button textColor="#fff" buttonColor="#6C757D" mode="contained" onPress={addTaskToFirestore} icon={"plus"}>
        Adicionar Tarefa
      </Button>
    </View>
  );
}
