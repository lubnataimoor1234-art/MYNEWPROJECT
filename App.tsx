
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./src/navigation/Main.navigation";
//import MainDrawer from "./src/navigation/MainDrawer";
import { StatusBar } from "react-native";
import Colors from "./src/utils/colors.utils";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor={Colors.PRIMARY}
          barStyle="light-content"
        />
       
          <Main />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;




