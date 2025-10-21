

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Colors from "./src/utils/Colors.utils";
import Tab from "./src/navigation/Tab.navigation";


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor={Colors.PRIMARY}
          barStyle="light-content"
        />
        <Tab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;



