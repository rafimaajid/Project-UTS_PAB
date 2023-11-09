import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const OTPActiveKeyboardClosed = () => {
  return (
    <View style={styles.otpActiveKeyboardClosed}>
      <View style={[styles.wrapper, styles.wrapperPosition]}>
        <View>
          <View style={[styles.navBar, styles.navBarSpaceBlock]}>
            <Image
              style={styles.arrowleftIcon}
              contentFit="cover"
              source={require("../assets/arrowleft.png")}
            />
          </View>
          <View style={styles.titleSpaceBlock}>
            <Text style={[styles.verifyYourMobile, styles.textTypo]}>
              Verify your mobile number
            </Text>
            <Text style={[styles.weSentA, styles.weSentATypo]}>
              We sent a 6-digit code to +62 17673549551
            </Text>
          </View>
        </View>
        <View style={styles.wrapper2}>
          <View style={[styles.inputField, styles.navBarSpaceBlock]}>
            <Text style={[styles.text, styles.textTypo]}>000000</Text>
            <View style={[styles.indicator, styles.shapeBg]} />
          </View>
          <View style={[styles.resendCodeIn10sWrapper, styles.titleSpaceBlock]}>
            <Text style={[styles.resendCodeIn, styles.codeTypo]}>
              Resend code in 10s
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.buttonFlexBox]}>
        <View style={[styles.shape, styles.shapeBg]} />
      </View>
      <View style={[styles.buttonContainer, styles.navBarSpaceBlock]}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.verifyCode, styles.codeTypo]}>Verify code</Text>
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
  navBarSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    width: 375,
  },
  textTypo: {
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  weSentATypo: {
    opacity: 0.6,
    fontSize: FontSize.size_sm,
  },
  shapeBg: {
    backgroundColor: Color.labelsPrimary,
    borderRadius: Border.br_81xl,
  },
  titleSpaceBlock: {
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xl,
    width: 375,
  },
  codeTypo: {
    fontFamily: FontFamily.instrumentSansMedium,
    fontWeight: "500",
    color: Color.labelsPrimary,
    letterSpacing: 0,
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
  verifyYourMobile: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  weSentA: {
    fontFamily: FontFamily.interMedium,
    marginTop: 8,
    fontWeight: "500",
    opacity: 0.6,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.labelsPrimary,
    letterSpacing: 0,
  },
  text: {
    fontSize: FontSize.size_lg,
    opacity: 0.3,
    zIndex: 0,
    textAlign: "left",
    flex: 1,
  },
  indicator: {
    top: 16,
    left: 24,
    width: 2,
    height: 22,
    zIndex: 1,
    position: "absolute",
    borderRadius: Border.br_81xl,
  },
  inputField: {
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  resendCodeIn: {
    textAlign: "left",
    opacity: 0.6,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.instrumentSansMedium,
  },
  resendCodeIn10sWrapper: {
    backgroundColor: Color.neutralsBackground,
  },
  wrapper2: {
    marginTop: 16,
  },
  wrapper: {
    top: 0,
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
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  verifyCode: {
    fontSize: FontSize.calloutRegular_size,
    opacity: 0.4,
    textAlign: "center",
  },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_981xl,
    backgroundColor: Color.colorWhitesmoke,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  buttonContainer: {
    top: 694,
    paddingVertical: Padding.p_base,
    left: 0,
    position: "absolute",
  },
  otpActiveKeyboardClosed: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsBackground,
  },
});

export default OTPActiveKeyboardClosed;
