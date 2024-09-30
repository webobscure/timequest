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
        update(ref(db, 'support/' + userId), {
            username: name,
            email: email,
            theme: theme,
            message: message
        })
        console.log(name,email,theme,message)
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerAbout}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile page')}>
                <Image source={require("../assets/backButton.png")} style={styles.backButton}/>
            </TouchableOpacity>
            <Text style={styles.text}>Tournament</Text>
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
