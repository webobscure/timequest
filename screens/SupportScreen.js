import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Navbar from '../components/Navbar';
import { getDatabase, ref, set } from "firebase/database";

export default function SupportScreen({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [theme, setTheme] = useState('')
    const [message, setMessage] = useState('')
    
    const createSupportTicket =  (userId) => {
        const db = getDatabase();
        set(ref(db, 'support/' + userId), {
            username: name,
            email: email,
            theme: theme,
            message: message
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerAbout}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile page')}>
                <Image source={require("../assets/backButton.png")} style={styles.backButton}/>
            </TouchableOpacity>
            <Text style={styles.text}>Поддержка</Text>
            </View>
           <View style={styles.inputs_container}>
            <View>
                <Text style={styles.textInput}>Имя</Text>
                <TextInput 
            value={name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="none" 
            style={styles.input_text}
            />
            </View>
            <View>
                <Text style={styles.textInput}>Email</Text>
                <TextInput 
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none" 
            style={styles.input_text}
            />
            </View>
            <View>
                <Text style={styles.textInput}>Тема</Text>
                <TextInput 
            value={theme}
            onChangeText={(text) => setTheme(text)}
            autoCapitalize="none" 
            style={styles.input_text}
            />
            </View>
            <View>
                <Text style={styles.textInput}>Ваше сообщение</Text>
                <TextInput 
            value={message}
            onChangeText={(text) => setMessage(text)}
            autoCapitalize="none" 
            style={styles.input_text_message}
            />
            </View>
           <View >
            <Text style={{color: '#FFF',
                fontSize: 14
            }}>Все поля обязательны для заполнения!</Text>
            <Text style={{color: '#FFF',
                fontSize: 14,
                marginTop: 10
            }}>Отправляя эту форм, вы соглашаетесь с условиями хранения и обработки персональных данных</Text>
           </View>
           <TouchableOpacity style={styles.button} onPress={() => createSupportTicket()}>
            <Text style={{color: "#1A1A1A", fontSize: 20, fontWeight: 700}}>Отправить</Text>
           </TouchableOpacity>
            
           
           </View>
           
        <Navbar />

        </View>
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
        right: 120
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
