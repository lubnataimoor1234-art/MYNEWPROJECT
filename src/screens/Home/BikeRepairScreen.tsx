

// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import {
//   Wrench,
//   Battery,
//   Fuel,
//   Settings,
//   Bike,
//   Truck,
// } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";

// import CustomHeader from "../../components/CustomHeader";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";

// const services = [
//   {
//     title: "Bike Puncture",
//     desc: "Flat tire repair or tube replacement",
//     icon: <Wrench size={28} color={Colors.RED} />,
//     route: "bikePuncture",
//   },
//   {
//     title: "Battery Issue",
//     desc: "Jump start or battery replacement",
//     icon: <Battery size={28} color={Colors.PRIMARY} />,
//     //route: "BatteryScreen",
//   },
//   {
//     title: "Engine Breakdown",
//     desc: "Engine diagnostics and minor fixes",
//     icon: <Truck size={28} color={Colors.PRIMARY} />,
//     //route: "EngineScreen",
//   },
//   {
//     title: "Fuel Delivery",
//     desc: "Emergency fuel delivered to your location",
//     icon: <Fuel size={28} color={Colors.PRIMARY} />,
//     //route: "FuelScreen",
//   },
//   {
//     title: "General Service",
//     desc: "Oil change, brake check, chain lube",
//     icon: <Settings size={28} color={Colors.WHITE} />,
//    // route: "GeneralServiceScreen",
//   },
//   {
//     title: "Bike Towing",
//     desc: "Get your bike towed to nearest garage",
//     icon: <Bike size={28} color={Colors.PRIMARY} />,
//     //route: "TowingScreen",
//   },
// ];

// const BikeRepairScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <CustomHeader title="Bike Repair" showBack showProfile showSearch={false} />

//       {/* Banner */}
//       <View style={styles.bannerCard}>
//         <Text style={styles.bannerTitle}>Bike Trouble?</Text>
//         <Text style={styles.bannerSubtitle}>
//           Choose the service you need — we'll send a mechanic right away!
//         </Text>
//         <TouchableOpacity>
//           <Text style={styles.learnMore}>Learn More →</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Section Title */}
//       <Text style={styles.sectionTitle}>Available Services</Text>

//       {/* Services */}
//       {services.map((service, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.serviceBox}
//         onPress={() => navigation.navigate(service.route as never)}
//         >
//           {service.icon}
//           <View style={styles.serviceTextBox}>
//             <Text style={styles.serviceTitle}>{service.title}</Text>
//             <Text style={styles.serviceDesc}>{service.desc}</Text>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// export default BikeRepairScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//   },
//   bannerCard: {
//     backgroundColor: Colors.YELLOW,
//     padding: matter.spacing.m,
//     borderRadius: matter.radius.lg,
//     marginVertical: matter.spacing.m,
//     marginHorizontal: matter.spacing.m,
//   },
//   bannerTitle: {
//     fontSize: matter.fontSize.lg,
//     fontWeight: "700",
//     color: Colors.WHITE,
//     marginBottom: 6,
//   },
//   bannerSubtitle: {
//     fontSize: matter.fontSize.sm,
//     color: Colors.WHITE,
//     marginBottom: 10,
//   },
//   learnMore: {
//     fontSize: matter.fontSize.sm,
//     fontWeight: "600",
//     color: Colors.WHITE,
//     textDecorationLine: "underline",
//   },
//   sectionTitle: {
//     fontSize: matter.fontSize.md,
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginBottom: matter.spacing.m,
//     paddingHorizontal: matter.spacing.m,
//   },
//   serviceBox: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.WHITE,
//     paddingVertical: 12,
//     paddingHorizontal: matter.spacing.m,
//     marginHorizontal: matter.spacing.m,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//     marginBottom: 12,
//     elevation: 2,
//   },
//   serviceTextBox: {
//     marginLeft: matter.spacing.s,
//   },
//   serviceTitle: {
//     fontSize: matter.fontSize.md,
//     fontWeight: "600",
//     color: Colors.TEXT,
//   },
//   serviceDesc: {
//     fontSize: matter.fontSize.sm,
//     color: Colors.DARK_GRAY,
//   },
// });
 

import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomHeader from "../../components/CustomHeader";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import strings from "../../utils/strings.utils";

const BikeRepairScreen = () => {
  const navigation = useNavigation();
   const [search, setSearch] = useState("");
  const {
    headerTitle,
    bannerTitle,
    bannerSubtitle,
    learnMore,
    sectionTitle,
    services,
  } = strings.bikeRepair;

  return (
    <ScrollView style={styles.container}>
      <CustomHeader title={headerTitle}
       showSearch 
       onSearchChange={setSearch}
       showBack showProfile />

      {/* Banner */}
      <View style={styles.bannerCard}>
        <Text style={styles.bannerTitle}>{bannerTitle}</Text>
        <Text style={styles.bannerSubtitle}>{bannerSubtitle}</Text>
        <TouchableOpacity>
          <Text style={styles.learnMore}>{learnMore}</Text>
        </TouchableOpacity>
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>

      {/* Services */}
      {services.map((services, index) => (
        <TouchableOpacity
          key={index}
          style={styles.serviceBox}
          onPress={() => navigation.navigate(services.route as never)}
        >
          {services.icon}
          <View style={styles.serviceTextBox}>
            <Text style={styles.serviceTitle}>{services.title}</Text>
            <Text style={styles.serviceDesc}>{services.desc}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default BikeRepairScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  bannerCard: {
    backgroundColor: Colors.YELLOW,
    padding: matter.spacing.m,
    borderRadius: matter.radius.lg,
    marginVertical: matter.spacing.m,
    marginHorizontal: matter.spacing.m,
  },
  bannerTitle: {
    fontSize: matter.fontSize.lg,
    fontWeight: "700",
    color: Colors.WHITE,
    marginBottom: 6,
  },
  bannerSubtitle: {
    fontSize: matter.fontSize.sm,
    color: Colors.WHITE,
    marginBottom: 10,
  },
  learnMore: {
    fontSize: matter.fontSize.sm,
    fontWeight: "600",
    color: Colors.WHITE,
    textDecorationLine: "underline",
  },
  sectionTitle: {
    fontSize: matter.fontSize.md,
    fontWeight: "700",
    color: Colors.TEXT,
    marginBottom: matter.spacing.m,
    paddingHorizontal: matter.spacing.m,
  },
  serviceBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: matter.spacing.m,
    marginHorizontal: matter.spacing.m,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    marginBottom: 12,
    elevation: 2,
  },
  serviceTextBox: {
    marginLeft: matter.spacing.s,
  },
  serviceTitle: {
    fontSize: matter.fontSize.sm,
    fontWeight: "600",
    color: Colors.TEXT,
  },
  serviceDesc: {
    fontSize: matter.fontSize.s,
    color: Colors.DARK_GRAY,
  },
});
