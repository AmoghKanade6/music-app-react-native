import { View, StyleSheet, Text, Image } from "react-native";
import logo from "../../assets/herologo.png";
import { Button } from "@rneui/themed";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.icon}>
          <Image style={styles.header} source={logo} />
          <Text style={styles.tunes}>Tunes</Text>
        </View>
        <Button
          title="Sign Up"
          buttonStyle={{
            borderColor: "#0057ff",
            borderWidth: 2,
            borderRadius: 50,
          }}
          type="outline"
          titleStyle={{ color: "#0057ff", fontWeight: "bold" }}
          containerStyle={{
            width: 100,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef6f9",
    padding: 15,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    paddingTop: 40,
    alignItems: "center",
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  tunes: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    width: 30,
    height: 25,
  },
});

export default Navbar;
