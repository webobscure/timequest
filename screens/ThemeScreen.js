import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity, Modal, FlatList
} from "react-native";
import Navbar from "../components/Navbar";

export default function ThemeScreen({ navigation }) {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const options = ['Темная', 'Светлая'];
  return (
    <View style={styles.container}>
      <View style={styles.headerAbout}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile page")}>
          <Image
            source={require("../assets/backButton.png")}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Управление подпиской</Text>
      </View>
      
      <View style={styles.themeBlock}>
      <Text style={styles.themeText}>Тема приложения</Text>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Text style={styles.themeText}>{selectedValue || 'Темная тема'}</Text>
      </TouchableOpacity>

      <Modal visible={isVisible} transparent={true} >
        <View style={{ margin: 0, padding: 20, backgroundColor: '#fff', borderRadius: 10, top: 200 }}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedValue(item);
                  setIsVisible(false);
                }}
              >
                <Text style={styles.pickerText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      </View>
      
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#F3F285",
    width: 342,
    height: 45,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 24,
    position: "relative",
    right: 15,
  },
  headerAbout: {
    position: "absolute",
    top: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "relative",
    right: 50,
  },
  subBlock: {
    display: "flex",
    flexDirection: "column",
    bottom: 250,
    right: 50,
    gap: 20,
  },
  arrow_img: {
    marginRight: 10,
  },
  profile_text: {
    color: "#FFF",
    fontSize: 22,
    marginLeft: 10,
    fontWeight: "500",
  },
  profile_button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    width: 420,
    height: 50,
    borderRadius: 10,
    marginTop: 7,
  },
  paymentButton: {
    width: 400,
    height: 45,
    backgroundColor: "#F3F285",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    borderRadius: 15
  },
  paymentButton__text: {
    fontSize: 19,
    fontWeight: "600"
  },
  themeBlock: {
    backgroundColor: "#262626",
    width: 420,
    height: 41,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: 150
  },
  themeText: {
    color: "#FFF",
    fontSize: 15
  },
  modalBlock: {
    top: 40,
    backgroundColor: "#FFF"
  },
  check: {
    position: 'absolute',
    top: 300
  },
  modalBlock__container: {
    backgroundColor: "#FFF"
  },
  pickerText: {
    left: 300,
    fontSize: 15,
    marginVertical: 5
  }
});
