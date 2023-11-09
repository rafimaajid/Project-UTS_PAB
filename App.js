const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PNActive from "./screens/PNActive";
import HomeScreen from "./screens/HomeScreen";
import OTPSuccess from "./screens/OTPSuccess";
import OTPActiveSuggestion from "./screens/OTPActiveSuggestion";
import OTPActiveKeyboardOpen from "./screens/OTPActiveKeyboardOpen";
import OTPActiveKeyboardClosed from "./screens/OTPActiveKeyboardClosed";
import PNFilledButtonActive from "./screens/PNFilledButtonActive";
import OTPFailed from "./screens/OTPFailed";
import SPLASH from "./screens/SPLASH";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "InstrumentSans-Medium": require("./assets/fonts/InstrumentSans-Medium.ttf"),
    "InstrumentSans-SemiBold": require("./assets/fonts/InstrumentSans-SemiBold.ttf"),
    "Martel-Bold": require("./assets/fonts/Martel-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PNActive"
              component={PNActive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPSuccess"
              component={OTPSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPActiveSuggestion"
              component={OTPActiveSuggestion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPActiveKeyboardOpen"
              component={OTPActiveKeyboardOpen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPActiveKeyboardClosed"
              component={OTPActiveKeyboardClosed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PNFilledButtonActive"
              component={PNFilledButtonActive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPFailed"
              component={OTPFailed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SPLASH"
              component={SPLASH}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
