import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { iconsList } from "../Constant";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {iconsList?.map((icon) => (
          <Image style={styles.icons} key={icon.id} source={icon.src} />
        ))}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    height: 70,
    backgroundColor: "#fff",
    marginTop: 30,
    borderRadius: 22,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    gap: 35,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
