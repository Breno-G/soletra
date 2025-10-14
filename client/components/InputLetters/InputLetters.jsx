import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function LetrasInput() {
  const [letras, setLetras] = useState(Array(7).fill(""));
  const [obrigatoria, setObrigatoria] = useState(null);
  const [focado, setFocado] = useState(null);

  const handleChange = (text, index) => {
    const novas = [...letras];
    novas[index] = text.toUpperCase().slice(0, 1);
    setLetras(novas);
  };

  return (
    <View style={styles.container}>
      {letras.map((letra, index) => {
        const isObrigatoria = obrigatoria === index;
        const temLetra = letra !== "";
        const isFocado = focado === index;

        return (
          <View
            key={index}
            style={[
              styles.box,
              isObrigatoria && { borderColor: "#1E88E5" },
              isFocado && { borderColor: "#1E88E5" },
            ]}
          >
            {temLetra && (
              <TouchableOpacity
                style={[
                  styles.starCircle,
                  isObrigatoria && { backgroundColor: "#1E88E5" },
                ]}
                onPress={() => setObrigatoria(index)}
              >
                <MaterialIcons
                  name="star"
                  size={13}
                  color={isObrigatoria ? "#FFF" : "#696969ff"}
                />
              </TouchableOpacity>
            )}

            <TextInput
              style={[styles.input, { textAlign: "center" }]}
              value={letra}
              onChangeText={(t) => handleChange(t, index)}
              maxLength={1}
              onFocus={() => setFocado(index)} // quando entra em foco
              onBlur={() => setFocado(null)}   // quando perde foco
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 60,
  },
  box: {
    position: "relative",
    backgroundColor: "#f8fafc",
    width: 53,
    height: 53,
    margin: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "100%",
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    outlineStyle: "none", // remove borda de foco do navegador
  },
  starCircle: {
    position: "absolute",
    top: -10,
    right: -10,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
});
