import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const SPLASH = () => {
  return (
    <View style={styles.splash}>
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={[styles.logoChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={styles.logoItem}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Image
          style={[styles.logoInner, styles.logoPosition]}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-2.png")}
        />
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Text style={styles.amhealth}>AmHealth</Text>
      </View>
      <Image
        style={[styles.splashChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    left: 40,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    position: "absolute",
  },
  logoChild: {
    left: 38,
    width: 50,
    height: 99,
  },
  logoItem: {
    top: 25,
    left: 13,
    width: 99,
    height: 50,
    position: "absolute",
  },
  logoInner: {
    top: 19,
    width: 48,
    height: 49,
  },
  polygonIcon: {
    top: 38,
    left: 55,
    width: 19,
    height: 18,
    position: "absolute",
  },
  lineIcon: {
    top: 49,
    left: 37,
    width: 22,
    height: 28,
    position: "absolute",
  },
  arrowIcon: {
    top: 50,
    left: -1,
    width: 129,
    height: 93,
    position: "absolute",
  },
  amhealth: {
    top: 24,
    left: 146,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: FontFamily.martelBold,
    color: "#2d6700",
    textAlign: "left",
    width: 211,
    height: 62,
    position: "absolute",
  },
  logo: {
    top: 412,
    width: 357,
    height: 143,
  },
  splashChild: {
    left: 0,
    width: 430,
    height: 282,
  },
  splash: {
    borderRadius: 50,
    backgroundColor: Color.neutralsBackground,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SPLASH;
