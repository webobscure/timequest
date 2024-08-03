import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator } from "react-native";
import React, {useState} from 'react'
import { FIREBASE_AUTH } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const signIn = async () => {
    
    setLoading(true);
    try {
      
      const response =  await signInWithEmailAndPassword(auth,email,password);
      console.log(response)
      navigation.navigate('Home page')
    } catch(err) {
      console.error(err);
      alert('Registration failed:' + err.message)
    } finally {
      setLoading(false);
    }
    
    navigation.navigate('Home page')
  }


  return (
    <View style={styles.reg_conatiner}>
      <Text style={styles.reg_text}>Вход</Text>
      <View style={styles.reg_block}>
        
        <View style={styles.reg_input}>
        <Text style={styles.input_label} >Email</Text>
        <TextInput value={email} onChangeText={(text) => setEmail(text)} />
        </View>
        <View style={styles.reg_input}>
        <Text style={styles.input_label} >Пароль</Text>
        <TextInput value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true} />
        <View style={styles.forgotPassword_container}>
          <Text style={styles.gray_text}>Восстановить пароль</Text>
        </View>
        </View>
        {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <View style={styles.reg_button}>
      <Button onPress={signIn} title="Войти" color={"#000"}/>
      </View>}
      <View style={styles.signUp_container}>
        <Text style={styles.gray_text}>У вас нет аккаунта?</Text>
        <Button onPress={() => navigation.navigate('Sign up page')} title="Зарегистрироваться" style={styles.reg_Button} color={"#FFF"}/>
      </View>
      </View>
     
    </View>
  )
}

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
        marginTop:354,
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
        marginTop: 85,
        justifyContent: "center"
    },
    forgotPassword_container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      top: 20,
    },
    gray_text: {
      color: '#FFF',
      fontWeight: "200"
    },
    reg_Button: {
      color: '#FFF',
      fontSize: 20
    },
    signUp_container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      top: 250
    }
})


export default LoginScreen