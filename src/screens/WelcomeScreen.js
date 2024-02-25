import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import bgImg from "../../assets/white.png";
import React from "react";
import Card from "../components/Card";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title1}>Where</Text>
        <Text style={styles.title2}>Music</Text>
        <Text style={styles.title3}>finds its home</Text>
        <Text style={styles.title4}>Explore, Listen and discover</Text>
        <Image
          style={{
            margin: 20,
            position: "absolute",
            width: 350,
            height: 400,
            zIndex: -10,
          }}
          source={bgImg}
        />
        <Card />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    marginBottom: 120,
  },
  title1: {
    fontSize: 70,
    color: "#0057ff",
    fontWeight: "700",
  },
  title2: {
    fontSize: 100,
    color: "#0057ff",
    fontWeight: "700",
  },
  title3: {
    fontSize: 40,
    color: "#36454F",
    fontWeight: "700",
  },
  title4: {
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
  },
});

export default WelcomeScreen;
