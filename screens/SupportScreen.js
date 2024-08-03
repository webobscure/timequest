import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

export default function SupportScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Subscription Screen</Text>
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
    text: {
        color: '#FFF',
        fontSize: 24,
    },
});
