
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./src/navigation/Main.navigation";
import { StatusBar } from "react-native";
import Colors from "./src/utils/Colors.utils";

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



// import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar } from "react-native";
// import Colors from "./src/utils/colors.utils";
// import Main from "./src/navigation/Main.navigation";
// import AuthStack from "./src/navigation/AuthStack";

// const App = () => {
//  const [isSignedIn, setIsSignedIn] = useState(false);
 

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <StatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content" />

//         {/* 🔹 Conditionally render navigation */}
//         {isSignedIn ? <Main /> : <AuthStack />}
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;

