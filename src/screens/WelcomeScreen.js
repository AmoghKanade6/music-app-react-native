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
import music from "../../assets/Render.mp4";
import { Video } from "expo-av";
import MusicCard from "../components/MusicCard";

const WelcomeScreen = ({ navigation }) => {
  const video = React.useRef(null);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title1}>Where</Text>
        <Text style={styles.title2}>Music</Text>
        <Text style={styles.title3}>finds its home</Text>
        <Text style={styles.title4}>Explore, Listen and discover</Text>
        <Text style={styles.title4}>your sound</Text>
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
      {/* <View style={{ display: "flex", margin: 10 }}>
        <Video ref={video} style={styles.video} source={music} isLooping />
      </View> */}
      <MusicCard />
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
    fontSize: 110,
    color: "#0057ff",
    fontWeight: "700",
  },
  title3: {
    fontSize: 40,
    color: "#36454F",
    fontWeight: "700",
    marginBottom: 20,
    opacity: 0.5,
  },
  title4: {
    fontSize: 18,
    color: "#000",
    opacity: 0.6,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
