import { React } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
export default function SettingScreen() {
  return (
    <>
      <View style={styles.container}>
        <Navbar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  });
