import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PNActive = () => {
  return (
    <View style={styles.pnActive}>
      <View style={[styles.wrapper, styles.wrapperPosition]}>
        <View>
          <View style={[styles.navBar, styles.titleSpaceBlock]}>
            <Image
              style={styles.arrowleftIcon}
              contentFit="cover"
              source={require("../assets/arrowleft.png")}
            />
          </View>
          <View style={[styles.title, styles.titleSpaceBlock]}>
            <Text style={styles.enterYourMobile}>Enter your mobile number</Text>
            <Text style={[styles.wellSendYou, styles.sendTypo]}>
              We’ll send you a code to verify your number
            </Text>
          </View>
        </View>
        <View style={[styles.inputField, styles.titleSpaceBlock]}>
          <View style={styles.wrapper2}>
            <Text style={[styles.text, styles.textTypo]}>+62</Text>
            <Image
              style={styles.caretdownIcon}
              contentFit="cover"
              source={require("../assets/caretdown.png")}
            />
          </View>
          <View style={styles.wrapper3}>
            <Text style={[styles.phoneNumber, styles.textTypo]}>
              Phone number
            </Text>
            <View style={[styles.indicator, styles.shapeBg]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.buttonFlexBox]}>
        <View style={[styles.shape, styles.shapeBg]} />
      </View>
      <View style={[styles.buttonContainer, styles.titleSpaceBlock]}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.sendCode, styles.sendTypo]}>Send code</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 0,
    position: "absolute",
  },
  titleSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    width: 375,
  },
  sendTypo: {
    fontWeight: "500",
    textAlign: "center",
    color: Color.labelsPrimary,
    letterSpacing: 0,
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  shapeBg: {
    backgroundColor: Color.labelsPrimary,
    borderRadius: Border.br_81xl,
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowleftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  navBar: {
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  enterYourMobile: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  wellSendYou: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    opacity: 0.6,
    marginTop: 8,
  },
  title: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_xs,
  },
  text: {
    textAlign: "center",
  },
  caretdownIcon: {
    width: 12,
    height: 12,
    marginLeft: 2,
    overflow: "hidden",
  },
  wrapper2: {
    alignItems: "center",
    flexDirection: "row",
  },
  phoneNumber: {
    textAlign: "left",
    opacity: 0.3,
    zIndex: 0,
    flex: 1,
  },
  indicator: {
    width: 2,
    height: 22,
    zIndex: 1,
    left: 0,
    position: "absolute",
    top: 0,
  },
  wrapper3: {
    marginLeft: 12,
    flexDirection: "row",
    flex: 1,
  },
  inputField: {
    marginTop: 16,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  wrapper: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  shape: {
    width: 138,
    height: 5,
  },
  homeIndicator: {
    bottom: 0,
    paddingTop: Padding.p_2xl,
    paddingBottom: Padding.p_5xs,
    width: 375,
    justifyContent: "center",
    left: 0,
    position: "absolute",
  },
  sendCode: {
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.instrumentSansMedium,
    opacity: 0.4,
  },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_981xl,
    backgroundColor: Color.colorWhitesmoke,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  buttonContainer: {
    top: 322,
    paddingVertical: Padding.p_base,
    left: 0,
    position: "absolute",
    paddingHorizontal: Padding.p_5xl,
  },
  pnActive: {
    backgroundColor: Color.neutralsBackground,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default PNActive;
