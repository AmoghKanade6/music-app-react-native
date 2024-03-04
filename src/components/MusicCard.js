import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "./Wrapper";
import { profileMusic, rowData } from "../Constant";

const MusicCard = () => {
  return (
    <View style={{ margin: 10, gap: 20 }}>
      {profileMusic?.slice(0, 1).map((music, id) => (
        <Wrapper profileData={music} key={id} />
      ))}
      <View>
        {rowData?.map((music, id) => (
          <Wrapper profileData={music} key={id} />
        ))}
      </View>
      {profileMusic?.slice(1, 3).map((music, id) => (
        <Wrapper profileData={music} key={id} />
      ))}
    </View>
  );
};

export default MusicCard;

const styles = StyleSheet.create({});
