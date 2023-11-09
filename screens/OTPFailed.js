import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

const OTPFailed = () => {
  return (
    <View style={styles.otpFailed}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.statusBar}>
            <Text style={[styles.time, styles.timeClr]}>9:41</Text>
            <View style={styles.rightSide}>
              <Image
                style={styles.iconMobileSignal}
                contentFit="cover"
                source={require("../assets/icon--mobile-signal.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={styles.statusbarBatteryIcon}
                contentFit="cover"
                source={require("../assets/-statusbarbattery.png")}
              />
            </View>
          </View>
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
            <Text style={styles.weSentA}>
              We sent a 6-digit code to +49 17673549551
            </Text>
          </View>
        </View>
        <View style={styles.inputFieldParent}>
          <View style={[styles.inputField, styles.navBarSpaceBlock]}>
            <Text style={[styles.text, styles.textTypo]}>000000</Text>
            <View style={[styles.indicator, styles.shapeBg]} />
          </View>
          <View
            style={[
              styles.codeIsIncorrectPleaseTryWrapper,
              styles.titleSpaceBlock,
            ]}
          >
            <Text style={[styles.codeIsIncorrect, styles.codeTypo]}>
              Code is incorrect, please try again
            </Text>
          </View>
          <View
            style={[
              styles.codeIsIncorrectPleaseTryWrapper,
              styles.titleSpaceBlock,
            ]}
          >
            <Text style={[styles.resendCodeIn, styles.codeTypo]}>
              Resend code in 10s
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.button10FlexBox]}>
        <View style={styles.keyboardIphone}>
          <View style={styles.frame}>
            <View style={[styles.frame1, styles.framePosition]}>
              <View style={styles.empty} />
              <View style={[styles.button, styles.buttonLayout]}>
                <Text style={styles.text1}>0</Text>
              </View>
              <Image
                style={[styles.buttonIcon, styles.buttonLayout]}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
            </View>
            <View style={[styles.frame2, styles.framePosition]}>
              <View style={styles.buttonShadowBox}>
                <View style={styles.frame3}>
                  <Text style={[styles.def, styles.defTypo]}>GHI</Text>
                  <Text style={[styles.text2, styles.textPosition]}>4</Text>
                </View>
              </View>
              <View style={[styles.button2, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def1, styles.defTypo]}>JKL</Text>
                  <Text style={[styles.text3, styles.textPosition]}>5</Text>
                </View>
              </View>
              <View style={[styles.button3, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def2, styles.defTypo]}>MNO</Text>
                  <Text style={[styles.text2, styles.textPosition]}>6</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition]}>
              <View style={styles.buttonShadowBox}>
                <View style={styles.frame3}>
                  <Text style={[styles.def3, styles.defTypo]}>PQRS</Text>
                  <Text style={[styles.text3, styles.textPosition]}>7</Text>
                </View>
              </View>
              <View style={[styles.button5, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def4, styles.defTypo]}>TUV</Text>
                  <Text style={[styles.text2, styles.textPosition]}>8</Text>
                </View>
              </View>
              <View style={[styles.button6, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def5, styles.defTypo]}>WXYZ</Text>
                  <Text style={[styles.text2, styles.textPosition]}>9</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frame10, styles.framePosition]}>
              <View style={styles.buttonShadowBox}>
                <View style={styles.frame3}>
                  <Text style={[styles.def6, styles.defTypo]}>{` `}</Text>
                  <Text style={[styles.text8, styles.textPosition]}>1</Text>
                </View>
              </View>
              <View style={[styles.button8, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def4, styles.defTypo]}>ABC</Text>
                  <Text style={[styles.text3, styles.textPosition]}>2</Text>
                </View>
              </View>
              <View style={[styles.button9, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def1, styles.defTypo]}>DEF</Text>
                  <Text style={[styles.text3, styles.textPosition]}>3</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.shape, styles.shapeBg]} />
      </View>
      <View style={styles.buttonContainer} />
      <View style={[styles.button10, styles.button10FlexBox]}>
        <Text style={[styles.verifyCode, styles.codeTypo]}>Verify code</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.labelsPrimary,
    textAlign: "center",
  },
  navBarSpaceBlock: {
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelsPrimary,
    fontWeight: "600",
    letterSpacing: 0,
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
    letterSpacing: 0,
  },
  button10FlexBox: {
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  framePosition: {
    right: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  buttonLayout: {
    marginLeft: 4,
    height: 47,
    borderRadius: Border.br_8xs,
    flex: 1,
  },
  defTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.calloutRegular,
    left: "50%",
    top: "50%",
    marginTop: 8,
    textAlign: "center",
    color: Color.labelsPrimary,
    position: "absolute",
  },
  textPosition: {
    marginTop: -20,
    fontFamily: FontFamily.calloutRegular,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
    textAlign: "center",
    color: Color.labelsPrimary,
    position: "absolute",
  },
  time: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.labelsPrimary,
  },
  iconMobileSignal: {
    width: 18,
    height: 12,
  },
  wifiIcon: {
    width: 17,
    marginLeft: 7,
    height: 12,
  },
  statusbarBatteryIcon: {
    width: 27,
    height: 13,
    marginLeft: 7,
  },
  rightSide: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  statusBar: {
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_2xs,
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.neutralsBackground,
  },
  arrowleftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  navBar: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    width: 375,
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
  },
  inputField: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    width: 375,
  },
  codeIsIncorrect: {
    color: "#ff4b4b",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.instrumentSansMedium,
  },
  codeIsIncorrectPleaseTryWrapper: {
    backgroundColor: Color.neutralsBackground,
  },
  resendCodeIn: {
    textAlign: "left",
    opacity: 0.6,
    fontFamily: FontFamily.instrumentSansMedium,
    fontSize: FontSize.size_sm,
    color: Color.labelsPrimary,
  },
  inputFieldParent: {
    marginTop: 16,
  },
  wrapper: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  empty: {
    backgroundColor: Color.colorCrimson,
    height: 20,
    flex: 1,
  },
  text1: {
    marginTop: -15.5,
    marginLeft: -9.15,
    fontFamily: FontFamily.calloutRegular,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
    textAlign: "center",
    color: Color.labelsPrimary,
    position: "absolute",
  },
  button: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    marginLeft: 4,
  },
  buttonIcon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  frame1: {
    top: 159,
  },
  def: {
    marginLeft: -9,
  },
  text2: {
    marginLeft: -9,
  },
  frame3: {
    marginTop: -22.5,
    marginLeft: -10.15,
    width: 20,
    height: 40,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonShadowBox: {
    height: 47,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
  def1: {
    marginLeft: -10,
  },
  text3: {
    marginLeft: -8,
  },
  button2: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    marginLeft: 4,
  },
  def2: {
    marginLeft: -12,
  },
  button3: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    marginLeft: 4,
  },
  frame2: {
    top: 53,
  },
  def3: {
    marginLeft: -14,
  },
  def4: {
    marginLeft: -11,
  },
  button5: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    marginLeft: 4,
  },
  def5: {
    marginLeft: -16,
  },
  button6: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    marginLeft: 4,
  },
  frame6: {
    top: 106,
  },
  def6: {
    marginLeft: 0,
  },
  text8: {
    marginLeft: -7,
  },
  button8: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    marginLeft: 4,
  },
  button9: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    marginLeft: 4,
  },
  frame10: {
    bottom: 159,
  },
  frame: {
    right: 6,
    bottom: 80,
    left: 6,
    height: 206,
    position: "absolute",
  },
  keyboardIphone: {
    backgroundColor: Color.colorGray_200,
    height: 292,
    width: 375,
  },
  shape: {
    width: 138,
    height: 5,
    marginTop: 10,
  },
  homeIndicator: {
    bottom: -98,
    left: -34,
    width: 444,
    paddingTop: Padding.p_2xl,
    paddingBottom: Padding.p_5xs,
  },
  buttonContainer: {
    top: 392,
    left: 36,
    width: 298,
    height: 36,
    position: "absolute",
  },
  verifyCode: {
    fontSize: FontSize.calloutRegular_size,
    opacity: 0.4,
    textAlign: "center",
    color: Color.labelsPrimary,
  },
  button10: {
    top: 341,
    left: 54,
    borderRadius: Border.br_981xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 225,
    height: 39,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  otpFailed: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsBackground,
  },
});

export default OTPFailed;
