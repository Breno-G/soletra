import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/Header";
import InputLetters from "../components/InputLetters/InputLetters"

export default function Index() {
  return (
    <View style = {styles.container}>
      <Header></Header>
      <View style = {styles.actions}>
      <InputLetters/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3F2FD",
        paddingVertical: 32,
        paddingHorizontal: 16,
        gap: 40
      },
      actions:{
        padding: 24,
        backgroundColor: "#FFFFFF",
        borderColor: "#e1e7ef",
        borderRadius: 32,
        borderWidth: 1,
        width: "98%",
      }

      
  });

