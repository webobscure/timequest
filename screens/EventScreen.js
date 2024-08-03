import { Text, View, StyleSheet, Image,TouchableOpacity, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function EventScreen() {
    return (
        <>
        <View style={styles.black_container}>
        <Header />
        <View style={styles.eventPage}>
        <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/timequest-73b3a.appspot.com/o/voucher.png?alt=media&token=258d803d-dcee-446a-9350-5a92b78b3d4d"} } style={styles.voucher}/>
        <View>
           <View>
           <Text style={styles.century_title}>Загадки и викторины</Text>
            <TouchableOpacity>
                <ScrollView horizontal={true}>
        <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/timequest-73b3a.appspot.com/o/frank.png?alt=media&token=d37bcbff-da8c-4ba7-b8bb-f3f3a2c30fd2"} } style={styles.contentImage}/>
        <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/timequest-73b3a.appspot.com/o/medich.png?alt=media&token=1ee62044-e12a-48d5-b2e1-1ac8bd2064d7"} } style={styles.contentImage}/>
                </ScrollView>
            </TouchableOpacity>
           </View>
            <View style={styles.wonder}>
           <Text style={styles.century_title}>Историческая карта</Text>
           <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/timequest-73b3a.appspot.com/o/sevenWonders.png?alt=media&token=0cba7c97-1f35-4ff6-bd60-b9d3326f17e2"} } style={styles.sevenWonders}/>

            </View>
        </View>
        </View>
        <Navbar />
        </View>
       
        </>
    )
}

const styles = StyleSheet.create({
    black_container: {
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      voucher: {
        borderColor: "#FFF",
        width: 430,
        height: 170,
        borderRadius: 10,
      },
      eventPage: {
        maxWidth: "100%",
        maxHeight: "100%",
        top: 140,
        gap: 10
      },
      contentImage: {
        width: 243,
        height: 170,
        marginRight: 10,
        borderRadius: 10
      },
      century_title: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
      },
      sevenWonders: {
        width: 430,
        height: 200,
        borderRadius: 10,
      },
      wonder: {
        maxWidth: 435,
        top: 40,

      }
})