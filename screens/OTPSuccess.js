import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OTPSuccess = () => {
  return (
    <View style={styles.otpSuccess}>
      <View style={styles.wrapper}>
        <View>
          <View style={[styles.navBar, styles.navBarSpaceBlock]}>
            <Image
              style={styles.arrowleftIcon}
              contentFit="cover"
              source={require("../assets/arrowleft.png")}
            />
          </View>
          <View style={styles.titleSpaceBlock}>
            <Text style={styles.verifyYourMobile}>
              Verify your mobile number
            </Text>
            <Text style={styles.weSentA}>
              We sent a 6-digit code to +62 17673549551
            </Text>
          </View>
        </View>
        <View style={styles.inputFieldParent}>
          <View style={[styles.navBar, styles.navBarSpaceBlock]}>
            <Text style={styles.text}>314405</Text>
          </View>
          <View style={[styles.resendCodeIn10sWrapper, styles.titleSpaceBlock]}>
            <Text style={[styles.resendCodeIn, styles.codeTypo]}>
              Resend code in 10s
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.homeSpaceBlock]}>
        <View style={styles.shapeLayout} />
      </View>
      <View style={[styles.buttonContainer, styles.navBarSpaceBlock]}>
        <View style={styles.button}>
          <Text style={[styles.verifyCode, styles.codeTypo]}>Verify code</Text>
        </View>
      </View>
      <View style={[styles.homeIndicator1, styles.homeSpaceBlock]}>
        <View style={styles.keyboardIphone}>
          <View style={styles.frame}>
            <View style={[styles.frame1, styles.framePosition]}>
              <View style={styles.empty} />
              <View style={[styles.button1, styles.buttonLayout]}>
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
              <View style={[styles.button3, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def1, styles.defTypo]}>JKL</Text>
                  <Text style={[styles.text3, styles.textPosition]}>5</Text>
                </View>
              </View>
              <View style={[styles.button4, styles.buttonLayout]}>
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
              <View style={[styles.button6, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def4, styles.defTypo]}>TUV</Text>
                  <Text style={[styles.text2, styles.textPosition]}>8</Text>
                </View>
              </View>
              <View style={[styles.button7, styles.buttonLayout]}>
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
              <View style={[styles.button9, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def4, styles.defTypo]}>ABC</Text>
                  <Text style={[styles.text3, styles.textPosition]}>2</Text>
                </View>
              </View>
              <View style={[styles.button10, styles.buttonLayout]}>
                <View style={styles.frame3}>
                  <Text style={[styles.def1, styles.defTypo]}>DEF</Text>
                  <Text style={[styles.text3, styles.textPosition]}>3</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.shape1, styles.shapeLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    width: 375,
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
  homeSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_2xl,
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
  shapeLayout: {
    height: 5,
    width: 138,
    backgroundColor: Color.labelsPrimary,
    borderRadius: Border.br_81xl,
  },
  arrowleftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  navBar: {
    flexDirection: "row",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
  },
  verifyYourMobile: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
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
    color: "#358b00",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
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
  inputFieldParent: {
    marginTop: 16,
  },
  wrapper: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    width: 375,
    left: 0,
  },
  verifyCode: {
    fontSize: FontSize.calloutRegular_size,
    textAlign: "center",
  },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_981xl,
    backgroundColor: Color.colorLightgreen,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  buttonContainer: {
    top: 245,
    left: 1,
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
  button1: {
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
  def2: {
    marginLeft: -12,
  },
  button4: {
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
  def5: {
    marginLeft: -16,
  },
  button7: {
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
  button10: {
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
  shape1: {
    marginTop: 10,
  },
  homeIndicator1: {
    bottom: -60,
    left: -34,
    width: 444,
  },
  otpSuccess: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsBackground,
  },
});

export default OTPSuccess;
