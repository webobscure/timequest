import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { FC, useContext, useState } from "react";
import { FIREBASE_AUTH } from "../firebase";
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import { Context } from "../context/StoreContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Sign up page">;
};

const SignupScreen: FC<SignupScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [nickname , setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLoop, setPasswordLoop] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);
  const {store} = useContext(Context)

  const signUp = async () => {
    if (password !== passwordLoop) {
      alert("Пароли не совпадают!");
      
      return;
    }

    setLoading(true);
    try {
      const response = await store.signup(email, password, nickname);
      console.log("Регистрация успешна:", response);
      alert("Регистрация успешна!");
    } catch (err: any) {
      console.error("Ошибка регистрации:", err.response?.data?.message || err.message);
      alert("Ошибка регистрации: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
    navigation.navigate("Login page");
  };

  return (
    <View
      style={[
        styles.reg_conatiner,
        { backgroundColor: themeStyles.backgroundColor },
      ]}
    >
      <Text style={[styles.reg_text, {color: themeStyles.textColor}]}>Создайте аккаунт</Text>
      <View style={styles.reg_block}>
      <View
          style={[styles.reg_input, { backgroundColor: themeStyles.input }]}
        >
          <Text style={[styles.input_label, {color: themeStyles.inputLabel}]}>Имя</Text>
          <TextInput
            value={nickname}
            autoCapitalize="none"
            onChangeText={(text) => setNickname(text)}
            placeholder="Alex"
            style={styles.text_input}
          />
        </View>
        <View
          style={[styles.reg_input, { backgroundColor: themeStyles.input }]}
        >
          <Text style={[styles.input_label, {color: themeStyles.inputLabel}]}>E-mail</Text>
          <TextInput
            value={email}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            inputMode="email"
            placeholder="name@mail.com"
            style={styles.text_input}
          />
        </View>
        <View
          style={[styles.reg_input, { backgroundColor: themeStyles.input }]}
        >
          <Text style={[styles.input_label, {color: themeStyles.inputLabel}]}>Пароль</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize="none"
            style={styles.text_input}
          />
        </View>
        <View
          style={[styles.reg_input, { backgroundColor: themeStyles.input }]}
        >
          <Text style={[styles.input_label, {color: themeStyles.inputLabel}]}>Пароль ещё раз</Text>
          <TextInput
            value={passwordLoop}
            onChangeText={(text) => setPasswordLoop(text)}
            secureTextEntry={true}
            autoCapitalize="none"
            style={styles.text_input}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.reg_button}>
            <Button onPress={signUp} title="Создать" color={"#000"} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reg_conatiner: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  reg_text: {
    color: "#FFF",
    marginTop: 354,
    fontSize: 34,
    fontWeight: "700",
  },
  reg_block: {
    width: 375,
    height: 812,
    alignItems: "center",
    marginTop: 71,
  },
  text_input: {
    position: 'relative',
    left: 10,
    bottom: 5,
  },
  reg_input: {
    width: 342,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginTop: 47,
  },
  input_label: {
    position: "relative",
    bottom: 25,
    color: "#FFF",
    fontWeight: "200",
    fontSize: 14,
  },
  reg_button: {
    width: 343,
    height: 50,
    backgroundColor: "#F3F285",
    borderRadius: 43,
    marginTop: 55,
    justifyContent: "center",
  },
});

export default SignupScreen;
