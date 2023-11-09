import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const PNFilledButtonActive = () => {
  return (
    <View style={styles.pnFilledButtonActive}>
      <View style={[styles.keyboardIphone, styles.homeIndicatorPosition]}>
        <View style={styles.frame}>
          <View style={[styles.frame1, styles.framePosition]}>
            <View style={styles.empty} />
            <View style={[styles.button, styles.buttonLayout]}>
              <Text style={styles.text}>0</Text>
            </View>
            <Image
              style={[styles.buttonIcon, styles.buttonLayout]}
              contentFit="cover"
              source={require("../assets/button1.png")}
            />
          </View>
          <View style={[styles.frame2, styles.framePosition]}>
            <View style={styles.buttonShadowBox}>
              <View style={styles.frame3}>
                <Text style={[styles.def, styles.defTypo]}>GHI</Text>
                <Text style={[styles.text1, styles.textPosition]}>4</Text>
              </View>
            </View>
            <View style={[styles.button2, styles.buttonLayout]}>
              <View style={styles.frame3}>
                <Text style={[styles.def1, styles.defTypo]}>JKL</Text>
                <Text style={[styles.text2, styles.textPosition]}>5</Text>
              </View>
            </View>
            <View style={[styles.button3, styles.buttonLayout]}>
              <View style={styles.frame3}>
                <Text style={[styles.def2, styles.defTypo]}>MNO</Text>
                <Text style={[styles.text1, styles.textPosition]}>6</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame6, styles.framePosition]}>
            <View style={styles.buttonShadowBox}>
              <View style={styles.frame3}>
                <Text style={[styles.def3, styles.defTypo]}>PQRS</Text>
                <Text style={[styles.text2, styles.textPosition]}>7</Text>
              </View>
            </View>
            <View style={[styles.button5, styles.buttonLayout]}>
              <View style={styles.frame3}>
                <Text style={[styles.def4, styles.defTypo]}>TUV</Text>
                <Text style={[styles.text1, styles.textPosition]}>8</Text>
              </View>
            </View>
            <View style={[styles.button6, styles.buttonLayout]}>
              <View style={styles.frame3}>
                <Text style={[styles.def5, styles.defTypo]}>WXYZ</Text>
                <Text style={[styles.text1, styles.textPosition]}>9</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame10, styles.framePosition]}>
            <View style={styles.buttonShadowBox}>
              <View style={styles.frame3}>
                <Text style={[styles.def6, styles.defTypo]}>{` `}</Text>
                <Text style={[styles.text7, styles.textPosition]}>1</Text>
              </View>
            </View>
            <View style={[styles.button8, styles.buttonLayout]}>
              <View style={styles.frame3}>
                <Text style={[styles.def4, styles.defTypo]}>ABC</Text>
                <Text style={[styles.text2, styles.textPosition]}>2</Text>
              </View>
            </View>
            <View style={[styles.button9, styles.buttonLayout]}>
              <View style={styles.frame3}>
                <Text style={[styles.def1, styles.defTypo]}>DEF</Text>
                <Text style={[styles.text2, styles.textPosition]}>3</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
            <Text style={[styles.text10, styles.textTypo]}>+62</Text>
            <Image
              style={styles.caretdownIcon}
              contentFit="cover"
              source={require("../assets/caretdown.png")}
            />
          </View>
          <View style={styles.wrapper3}>
            <Text style={[styles.text11, styles.textTypo]}>17673549551</Text>
            <View style={[styles.indicator, styles.shapeBg]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.button10FlexBox]}>
        <View style={[styles.shape, styles.shapeBg]} />
      </View>
      <View style={[styles.buttonContainer, styles.titleSpaceBlock]}>
        <View style={[styles.button10, styles.button10FlexBox]}>
          <Text style={[styles.sendCode, styles.sendTypo]}>Send code</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    width: 375,
    bottom: 0,
    left: 0,
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
    marginTop: 8,
    textAlign: "center",
    color: Color.labelsPrimary,
    fontFamily: FontFamily.calloutRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    marginTop: -20,
    textAlign: "center",
    color: Color.labelsPrimary,
    fontFamily: FontFamily.calloutRegular,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
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
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelsPrimary,
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.labelsPrimary,
  },
  shapeBg: {
    backgroundColor: Color.labelsPrimary,
    borderRadius: Border.br_81xl,
  },
  button10FlexBox: {
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    backgroundColor: Color.colorCrimson,
    height: 20,
    flex: 1,
  },
  text: {
    marginTop: -15.5,
    marginLeft: -9.15,
    textAlign: "center",
    color: Color.labelsPrimary,
    fontFamily: FontFamily.calloutRegular,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
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
    flexDirection: "row",
  },
  def: {
    marginLeft: -9,
  },
  text1: {
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
  text2: {
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
    flexDirection: "row",
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
    flexDirection: "row",
  },
  def6: {
    marginLeft: 0,
  },
  text7: {
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
    flexDirection: "row",
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
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelsPrimary,
  },
  wellSendYou: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    opacity: 0.6,
    marginTop: 8,
    fontWeight: "500",
  },
  title: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_xs,
  },
  text10: {
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
  text11: {
    textAlign: "left",
  },
  indicator: {
    width: 2,
    height: 22,
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
  },
  shape: {
    width: 138,
    height: 5,
  },
  homeIndicator: {
    paddingTop: Padding.p_2xl,
    paddingBottom: Padding.p_5xs,
    width: 375,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  sendCode: {
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.instrumentSansMedium,
  },
  button10: {
    alignSelf: "stretch",
    borderRadius: Border.br_981xl,
    backgroundColor: Color.colorLightgreen,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  buttonContainer: {
    top: 436,
    paddingVertical: Padding.p_base,
    left: 0,
    position: "absolute",
  },
  pnFilledButtonActive: {
    backgroundColor: Color.neutralsBackground,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default PNFilledButtonActive;
