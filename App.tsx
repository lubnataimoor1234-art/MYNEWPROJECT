

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar } from "react-native";
// import Colors from "./src/utils/Colors.utils";
// import Tab from "./src/navigation/Tab.navigation";


// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <StatusBar
//           backgroundColor={Colors.PRIMARY}
//           barStyle="light-content"
//         />
//         <Tab />
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;



// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar, ActivityIndicator, View } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Colors from "./src/utils/Colors.utils";
// import AuthHomeStack from "./src/navigation/AuthHomeStack";
// import Tab from "./src/navigation/Tab.navigation";

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // ✅ Check token on app start
//   useEffect(() => {
//     const checkToken = async () => {
//       try {
//         const token = await AsyncStorage.getItem("userToken");
//         setIsAuthenticated(!!token);
//       } catch (error) {
//         console.error("Error reading token:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     checkToken();
//   }, []);

//   if (loading) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: Colors.WHITE,
//         }}
//       >
//         <ActivityIndicator size="large" color={Colors.PRIMARY} />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <StatusBar
//           backgroundColor={Colors.PRIMARY}
//           barStyle="light-content"
//         />
//         {isAuthenticated ? <Tab /> : <AuthHomeStack />}
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "./src/utils/Colors.utils";
import Tab from "./src/navigation/Tab.navigation";
import AuthStack from "./src/navigation/AuthHomeStack";

const App = () => {
  const [isSingnIn, setIsSingnIn] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // ✅ Check for saved token
        const token = await AsyncStorage.getItem("userToken");
        setIsSingnIn(!!token);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  // 🌀 Show loader while checking token
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

