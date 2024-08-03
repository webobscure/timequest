import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.profile_container}>
                <Text style={styles.avatar_text}>Мой профиль</Text>
                <Image
                    source={require("../assets/profile-mask.png")}
                    style={styles.image_avatar}
                />
                <Text style={styles.avatar_nick}>Артём</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SubscriptionScreen')}>
                    <Image
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/timequest-73b3a.appspot.com/o/subscription.png?alt=media&token=5a73654e-e67c-4aab-bcd8-ef729e6d7612",
                        }}
                        style={styles.sub_image}
                    />
                </TouchableOpacity>

                <View style={styles.setting}>
                    <TouchableOpacity style={styles.profile_button} onPress={() => navigation.navigate('Settings page', {screen: 'Settings page'})}>
                        <Text style={styles.profile_text}>Настройки профиля</Text>
                        <Image source={require("../assets/arrow.png")} style={styles.arrow_img} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_button} onPress={() => navigation.navigate('Support page', {screen: 'Support page'})}>
                        <Text style={styles.profile_text}>Написать в поддержку</Text>
                        <Image source={require("../assets/arrow.png")} style={styles.arrow_img} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_button} onPress={() => navigation.navigate('About page', {screen: 'About page'})}>
                        <Text style={styles.profile_text}>О приложении</Text>
                        <Image source={require("../assets/arrow.png")} style={styles.arrow_img} />
                    </TouchableOpacity>
                </View>
            </View>
            <Navbar />

        </View>
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
    setting: {
        marginTop: 30,
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
    image_avatar: {
        width: 114,
        height: 114,
        top: 20,
    },
    avatar_nick: {
        fontSize: 24,
        color: "#FFF",
        marginTop: 40,
        fontWeight: "bold",
    },
    sub_image: {
        width: 420,
        height: 155,
        marginTop: 30,
    },
    profile_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 90,
    },
    avatar_text: {
        color: "#FFF",
        fontSize: 34,
        fontWeight: "bold",
    },
});
