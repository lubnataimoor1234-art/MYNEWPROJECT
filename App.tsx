
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./src/navigation/Main.navigation";

import { StatusBar } from "react-native";
import Colors from "./src/utils/colors.utils";
// import AuthStack from './src/navigation/AuthStack';
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor={Colors.PRIMARY}
          barStyle="light-content"
        />
          {/* <AuthStack /> */}
          <Main />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;




