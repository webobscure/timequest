import { React, useState } from "react";
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
export default function SettingScreen({navigation}) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [theme, setTheme] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [marker, setMarker] = useState(true)
  return (
    <>
     <View style={styles.container}>
            <View style={styles.headerAbout}>
            <BackButton style={styles.backButton}/>
            <Text style={styles.text}>Настройка профиля</Text>
            </View>
           <View style={styles.inputs_container}>
            <View>
                <Text style={styles.textInput}>Ваше Имя</Text>
                <TextInput 
            value={name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="none" 
            style={styles.input_text}
            />
            </View>
            <View>
                <Text style={styles.textInput}>Ваш возраст</Text>
                <TextInput 
            value={age}
            onChangeText={(text) => setAge(text)}
            autoCapitalize="none" 
            style={styles.input_text}
            />
            </View>
            <View>
                <Text style={styles.textInput}>Ваш пол</Text>
                <TextInput 
            value={theme}
            onChangeText={(text) => setTheme(text)}
            autoCapitalize="none" 
            style={styles.input_text}
            />
            </View>
            <View>
                <Text style={styles.textInput}>Email</Text>
                <TextInput 
            value={message}
            onChangeText={(text) => setMessage(text)}
            autoCapitalize="none" 
            style={styles.input_text}
            />
            </View>
            <View>
                <Text style={styles.textInput}>Пароль</Text>
                <TextInput 
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize="none" 
            style={styles.input_text}
            />
            </View>
           <View>
            <Text style={{fontSize: 20, color: "#fff", position: 'relative', right: 30}}>Хочу получать рассылку</Text>
           </View>
            
           
           </View>
           
        <Navbar />

        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
  },
  button: {
      backgroundColor: '#F3F285',
      width: 342,
      height: 45,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  text: {
      color: '#FFF',
      fontSize: 24,
      position: 'relative',
      right: 15
  },
  headerAbout: {
      position: "absolute",
      top: 60,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  backButton: {
      position: 'relative',
      right: 50
  },
  inputs_container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      maxWidth: 342

  },
  input_text: {
      backgroundColor: "#FFF",
      width: 342,
      height: 40,
      borderRadius: 10,
      position: 'relative',
  },
  input_text_message: {
      backgroundColor: "#FFF",
      width: 342,
      height: 137,
      borderRadius: 10,
      position: 'relative',
      
  },
  textInput: {
      color: "#FFF",
      fontSize: 18,
      marginBottom: 13
  }
});
