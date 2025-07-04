import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator } from "react-native";
import React, { useContext, useState } from 'react'
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import { Context } from "../context/StoreContext";
import { observer } from "mobx-react-lite";
import { RootStackParamList } from "../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login page"
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);
  const { store } = useContext(Context);

  const signIn = async () => {
    setLoading(true);
    try {
      await store.login(email, password);
      if (store.isAuth) {
        navigation.navigate("Home page");
        console.log(store)
      } else {
        alert("Authentication failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={[
        styles.reg_conatiner,
        { backgroundColor: themeStyles.backgroundColor },
      ]}
    >
      <Text style={[styles.reg_text, { color: themeStyles.textColor }]}>
        Вход
      </Text>
      <View style={styles.reg_block}>
        <View style={[styles.reg_input, { backgroundColor: themeStyles.input }]}>
          <Text style={[styles.input_label, { color: themeStyles.inputLabel }]}>
            Email
          </Text>
          <TextInput
            value={email}
            style={styles.text_input}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={[styles.reg_input, { backgroundColor: themeStyles.input }]}>
          <Text style={[styles.input_label, { color: themeStyles.inputLabel }]}>
            Пароль
          </Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize="none"
            style={styles.text_input}
          />
          <View style={styles.forgotPassword_container}>
            <Text style={[styles.gray_text, { color: themeStyles.inputLabel }]}>
              Восстановить пароль
            </Text>
          </View>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.reg_button}>
            <Button onPress={signIn} title="Войти" color={"#000"} />
          </View>
        )}
        <View style={styles.signUp_container}>
          <Text style={[styles.gray_text, { color: themeStyles.inputLabel }]}>
            У вас нет аккаунта?
          </Text>
          <Button
            onPress={() => navigation.navigate("Sign up page")}
            title="Зарегистрироваться"
            color={themeStyles.inputLabel}
          />
        </View>
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
    backgroundColor: "#000"
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
  reg_input: {
    width: 342,
    height: 40,
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
    marginTop: 85,
    justifyContent: "center",
  },
  forgotPassword_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 20,
  },
  gray_text: {
    fontWeight: "400"
  },

  signUp_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 250
  },
  text_input: {
    position: 'relative',
    left: 10,
    bottom: 5,
  }
})


export default observer(LoginScreen)