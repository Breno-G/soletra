import { View, Text,StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
  return (
    <View style={styles.container}>
      <MaskedView
        maskElement={
          <Text style={[styles.title, { backgroundColor: "transparent" }]}>
            Resolve Soletra
          </Text>
        }
      >
        <LinearGradient
          colors={["#0EA5E9", "#1E88E5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={[styles.text, { opacity: 0 }]}>Resolve Soletra</Text>
        </LinearGradient>
      </MaskedView>
      <Text style={styles.subtext}>Encontre todas as palavras possíveis do jogo Soletra</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    margin:8,
    
  },
  subtext:{
    color:"#696969ff",
    fontSize: "1.25rem",

  }
});
