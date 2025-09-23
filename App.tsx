

import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "./src/utils/Colors.utils";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/store';
import BaseNavigation from "./src/navigation/Base.navigation";

const App = () => {
  const [isSingnIn, setIsSingnIn] = useState<boolean | null>(null); 

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        console.log("App - Retrieved token:", token);
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
          <StatusBar
            backgroundColor={Colors.PRIMARY}
            barStyle="light-content"
          />
          <BaseNavigation />
      </SafeAreaProvider>
      </PersistGate>
    </Provider>
      );
};

      export default App;

