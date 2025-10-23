
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "./src/utils/Colors.utils";
import Tab from "./src/navigation/Tab.navigation";
import AuthStack from "./src/navigation/AuthHomeStack";

const App = () => {
  const [isSingnIn, setIsSingnIn] = useState<boolean | null>(null); 

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        setIsSingnIn(!!token);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  if (isSingnIn === null) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.WHITE,
        }}
      >
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor={Colors.PRIMARY}
          barStyle="light-content"
        />
        {isSingnIn ? <Tab /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

