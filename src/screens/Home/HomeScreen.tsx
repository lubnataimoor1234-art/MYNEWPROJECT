
// import React from "react";
// import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
// import { Car, Wrench, ArrowLeft, UserCircle2, SkipBack } from "lucide-react-native";
// import Colors from "../../utils/colors.utils";
// import { useNavigation } from "@react-navigation/native";

// const Home = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
      
//       <View style={styles.header}>
//         <TouchableOpacity  onPress={() => navigation.goBack()}>
//           <ArrowLeft  size={26} color={Colors.PRIMARY} />
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.title}>Welcome to FixMyRide</Text>
//       <Text style={styles.subtitle}>Choose your role to get started</Text>

   
//       <Pressable
//         style={({ pressed }) => [
//           styles.buttonPrimary,
//           pressed && { backgroundColor: Colors.PRIMARY },
//         ]}
//         onPress={() => navigation.navigate("MapScreen" as never)}
//       >
//         <Car size={22} color={Colors.DARK_GRAY} />
//         <Text style={styles.buttonTextAlt}>Driver / Rider</Text>
//       </Pressable>

    
//       <Pressable
//         style={({ pressed }) => [
//           styles.buttonSecondary,
//           pressed && { backgroundColor: Colors.PRIMARY, borderColor: Colors.PRIMARY },
//         ]}
//         onPress={() => navigation.navigate("ServiceProviderScreen" as never)}
//       >
//         <Wrench size={22} color={Colors.DARK_GRAY} />
//         <Text style={styles.buttonTextAlt}>Mechanic / Service Provider</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//     paddingHorizontal: 20,
//     paddingTop: 300,
//   }, 
//   header: {
//      top: 50,
//     left: 16,
//     position: "absolute",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
 
//   title: {
//     fontSize: 22,
//     fontWeight: "700",
//     marginBottom: 8,
//     color: Colors.TEXT,
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: Colors.DARK_GRAY,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   buttonPrimary: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginBottom: 15,
//     width: "100%",
//     justifyContent: "center",
//   },
//   buttonSecondary: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.BORDER_GREY,
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     width: "100%",
//     justifyContent: "center",
//   },
//   buttonTextAlt: {
//     color: Colors.DARK_GRAY,
//     fontSize: 16,
//     fontWeight: "600",
//     marginLeft: 8,
//   },
// });

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Car, Wrench, ArrowLeft } from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import CustomHeader from "../../components/CustomHeader";
import strings from "../../utils/strings.utils";

import { useNavigation } from "@react-navigation/native";
import AppButton from "../../components/AppButton";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomHeader title="Hi.."
      subtitle="Ghulam NABI" 
       showBack 
       showProfile={false}/>
      <Text style={styles.title}>{strings.home.title}</Text>
      <Text style={styles.subtitle}>{strings.home.subtitle}</Text>

      <AppButton
        title={strings.home.driverBtn}
        onPress={() => navigation.navigate("MapScreen" as never)}
        icon={<Car size={22} color={Colors.WHITE} />}
        type="primary"
      />

      <AppButton
        title={strings.home.mechanicBtn}
        onPress={() => navigation.navigate("ServiceProviderScreen" as never)}
        icon={<Wrench size={22} color={Colors.PRIMARY} />}
        type="secondary"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
   
  },
  title: {
    fontSize: matter.fontSize.lg,
    fontWeight: "900",
    marginBottom: matter.spacing.s,
    color: Colors.TEXT,
    textAlign: "center",
    paddingTop: 150,
  },
  subtitle: {
    fontSize: matter.fontSize.sm,
    color: Colors.DARK_GRAY,
    marginBottom: matter.spacing.xl,
    textAlign: "center",
  },
});
