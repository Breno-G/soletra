import { StyleSheet, Text, View, Pressable } from "react-native";
import Header from "../components/Header/Header";
import InputLetters from "../components/InputLetters/InputLetters"
import Colors from "../constants/colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.actions}>
        <Text>Digite as letras</Text>
        <Text>Preencha as 7 letras disponíveis e escolha a letra obrigatória</Text>
        <InputLetters />
        <View style={styles.searchContainer}>
          <Pressable style={styles.searchButton}>
            <Text style={styles.searchText}>
              Encontrar palavras
            </Text>
          </Pressable>
          <Pressable style={styles.refreshButton}>
            <Text>Refresh</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightBlue,
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 40
  },
  actions: {
    padding: 24,
    backgroundColor: Colors.white,
    borderColor: "#e1e7ef",
    borderRadius: 32,
    borderWidth: 1,
    width: "98%",
    alignItems: "center",
    gap:20,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItens: "center",
    
  },
  searchButton: {
    backgroundColor: Colors.mainBlue,
    paddingHorizontal: 32,
    paddingVertical:16,
    borderRadius: 12,
    width: "85%",
    alignItems: "center"
  },
  searchText: {
    fontSize: "16",
    color: "#FFF",
    fontWeight:600
  },
  refreshButton: {
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 12,
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.borderGray,
  },



});

