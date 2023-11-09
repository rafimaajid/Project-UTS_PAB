import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreen1}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen1: {
    position: "absolute",
    marginTop: -15,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.instrumentSansSemiBold,
    color: Color.labelsPrimary,
    textAlign: "left",
  },
  homeScreen: {
    backgroundColor: Color.neutralsBackground,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HomeScreen;
