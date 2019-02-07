import React from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { white, purple } from "../utils/colors";

export default function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity
      style={Platform.OS === "ios" ? styles.iosBtn : styles.AndroidBtn}
      onPress={onPress}
    >
      <Text style={[styles.btnText, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosBtn: {
    backgroundColor: purple,
    padding: 20,
    borderRadius: 7,
    marginBottom: 10,
    marginTop: 10
  },
  AndroidBtn: {
    backgroundColor: purple,
    padding: 20,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});
