import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import pause from "../../assets/Pause.png";

const Wrapper = ({ profileData, id }) => {
  return (
    <View
      key={profileData.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 360,
        height: 82,
        borderRadius: 29,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 25,
        }}
      >
        <Image
          style={{
            display: "flex",
            alignItems: "center",
            width: 60,
            height: 60,
            marginLeft: "auto",
          }}
          source={profileData.src}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginRight: "auto",
          }}
        >
          <Text style={{ fontSize: 12 }}>{profileData.title}</Text>
          <Text style={{ fontWeight: "700" }}>{profileData.song}</Text>
        </View>
        <Image
          style={{
            width: 60,
            height: 30,
          }}
          source={profileData.lines}
        />
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={pause}
        />
      </View>
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({});
