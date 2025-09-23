
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import {
//   Car,
//   Wrench,
//   Home,
//   AlertTriangle,
//   ShoppingCart,
//   Key,
//   ShieldCheck,
// } from "lucide-react-native";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import { useNavigation } from "@react-navigation/native";
// import strings from "../../utils/strings.utils";

// import MainHeader from "../../components/MainHeader";


// const services = [
//   { id: 1, title: "Service Garage", icon: <Wrench color={Colors.PRIMARY} size={28} />, screen: "ServiceAtGarage" },
//   { id: 2, title: "Door Services", icon: <Home color={Colors.PRIMARY} size={28} />, screen: "DoorServices" },
//   { id: 3, title: "Emergency Service", icon: <AlertTriangle color={Colors.PRIMARY} size={28} />, screen: "EmergencyServiceScreen" },
//   { id: 4, title: "Shop Spare Parts", icon: <ShoppingCart color={Colors.PRIMARY} size={28} />, screen: "ShopSparePartsScreen" },
//   { id: 5, title: "Rent A Car", icon: <Key color={Colors.PRIMARY} size={28} />, screen: "RentACarScreen" },
//   { id: 6, title: "Insurance Service", icon: <ShieldCheck color={Colors.PRIMARY} size={28} />, screen: "InsuranceServiceScreen" },
//   { id: 7, title: "Driver / Rider", icon: <ShieldCheck color={Colors.PRIMARY} size={28} />, screen: "MapScreen" },
//   { id: 8, title: "Mechanic / Service Provider", icon: <ShieldCheck color={Colors.PRIMARY} size={28} />, screen: "ServiceProviderScreen" },
//   { id: 7, title: "Driver / Rider", icon: <ShieldCheck color={Colors.PRIMARY} size={28} />, screen: "MapScreen" },
// ];

// const HomeScreen = () => {
//   const navigation = useNavigation<any>();
//   const handleServicePress = (ServiceAtGarage: string) => {
//     if (ServiceAtGarage) {
//       navigation.navigate( ServiceAtGarage as never);
//     }
//   };

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       {/* ===== HEADER ===== */}
//       <MainHeader
//         title="FixMyRide"
//         showBell={true}
//         showBack={true}
//       />

//       {/* ===== SERVICES ===== */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Services</Text>
//         <View style={styles.servicesContainer}>
//           {services.map((service) => (
//             <TouchableOpacity
//               key={service.id}
//               style={styles.serviceBox}
//               onPress={() => handleServicePress(service.screen)}
//             >
//               <View style={styles.iconContainer}>{service.icon}</View>
//               <Text style={styles.serviceText}>{service.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       <View style={styles.exclusiveSection}>
//         <Text style={styles.sectionTitle}>Exclusive Services</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <TouchableOpacity style={styles.exclusiveCard}>
//             <Image
//                source={{ uri: "https://i.ibb.co/ZYDsJX4/parts2.jpg" }}
//               style={styles.exclusiveImage}
//             />
//             <View style={styles.exclusiveOverlay}>
//               <Text style={styles.exclusiveTitle}>Personalised Service of Expert Advisors</Text>
//               <TouchableOpacity style={styles.getServiceBtn}>
//                 <Text style={styles.getServiceText}>Get the service</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.exclusiveCard, { backgroundColor: Colors.RED }]}>
//             <Image
//               source={{ uri: "https://i.ibb.co/ZYDsJX4/parts2.jpg" }}
//               style={styles.exclusiveImage}
//             />
//             <View style={styles.exclusiveOverlay}>
//               <Text style={styles.exclusiveTitle}>Personalised Care for Women Car Owners</Text>
//               <TouchableOpacity style={styles.getServiceBtn}>
//                 <Text style={styles.getServiceText}>Get the service</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.BORDER_GREY,
//   },

//   // ===== SERVICES =====
//   section: {
//     marginTop: 20,
//     marginHorizontal: matter.spacing.m,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginBottom: 10,
//   },
//   servicesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   serviceBox: {
//     width: "30%",
//     backgroundColor: Colors.WHITE,
//     borderRadius: 12,
//     paddingVertical: 15,
//     alignItems: "center",
//     marginBottom: 15,
//     elevation: 2,
//     marginHorizontal: 6,
//   },
//   iconContainer: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: 25,
//     padding: 10,
//     marginBottom: 6,
//   },
//   serviceText: {
//     fontSize: 12,
//     color: Colors.TEXT,
//     textAlign: "center",
//     fontWeight: "600",
//   },

//   // ===== AD SECTION =====
//   adContainer: {
//     marginTop: 10,
//     paddingVertical: 10,
//   },
//   adBox: {
//     width: 250,
//     height: 130,
//     backgroundColor: Colors.WHITE,
//     borderRadius: 12,
//     marginHorizontal: 10,
//     elevation: 3,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   adImage: {
//     width: "100%",
//     height: "75%",
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//     resizeMode: "cover",
//   },
//   adText: {
//     fontSize: 14,
//     color: Colors.TEXT,
//     fontWeight: "600",
//     paddingTop: 6,
//     textAlign: "center",
//   },
//     // ===== EXCLUSIVE SERVICES =====
//   exclusiveSection: {
//     marginTop: 20,
//     marginHorizontal: matter.spacing.m,
//   },
//   exclusiveCard: {
//     width: 260,
//     height: 130,
//     borderRadius: 15,
//     overflow: "hidden",
//     marginRight: 15,
//     backgroundColor: "#6C63FF",
//     elevation: 3,
//   },
//   exclusiveImage: {
//     width: "100%",
//     height: "100%",
//     position: "absolute",
//     opacity: 0.2,
//   },
//   exclusiveOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//   },
//   exclusiveTitle: {
//     color: Colors.WHITE,
//     fontSize: 14,
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: 8,
//   },
//   getServiceBtn: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: 20,
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//   },
//   getServiceText: {
//     color: Colors.PRIMARY,
//     fontSize: 12,
//     fontWeight: "600",
//   },

// });


// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import { moderateScale, verticalScale } from "react-native-size-matters";
// import i18n from "../../utils/i18n.utils";
// import MainHeader from "../../components/MainHeader";
// import { services } from "../../DATA/HomeData";
// import ScreenWrapper from "../../components/ScreenWrapper";

// const HomeScreen = () => {
//   const navigation = useNavigation<any>();

//   const handlePress = (screen: string) => {
//     if (screen) {
//       (navigation as any).navigate(screen);
//     }
//   };

//   return (
//     <ScreenWrapper style={styles.container} showsVerticalScrollIndicator={false}>
//       <MainHeader title={i18n.t("appName")} showBell={true} showBack={true} />

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>{i18n.t("home.popularServices")}</Text>

//         <View style={styles.servicesContainer}>
//           {services.map((service) => (
//             <TouchableOpacity
//               key={service.id}
//               style={styles.serviceBox}
//               onPress={() => handlePress(service.screen)}
//             >
//               <View style={styles.iconContainer}>{service.icon}</View>
//               <Text style={styles.serviceText}>
//                 {i18n.t(service.title)}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       {/* ===== EXCLUSIVE SERVICES ===== */}
//       <View style={styles.exclusiveSection}>
//         <Text style={styles.sectionTitle}>
//           {i18n.t("home.exclusiveServices") || "Exclusive Services"}
//         </Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <TouchableOpacity style={styles.exclusiveCard}>
//             <Image
//               source={{ uri: "https://i.ibb.co/ZYDsJX4/parts2.jpg" }}
//               style={styles.exclusiveImage}
//             />
//             <View style={styles.exclusiveOverlay}>
//               <Text style={styles.exclusiveTitle}>
//                 {i18n.t("home.personalisedService") ||
//                   "Personalised Service of Expert Advisors"}
//               </Text>
//               <TouchableOpacity style={styles.getServiceBtn}>
//                 <Text style={styles.getServiceText}>
//                   {i18n.t("home.getService") || "Get the service"}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.BACKGROUND,
//   },
//   section: {
//     marginTop: verticalScale(20),
//     marginHorizontal: matter.spacing.m,
//   },
//   sectionTitle: {
//     fontSize: moderateScale(18),
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginBottom: verticalScale(10),
//   },
//   servicesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   serviceBox: {
//     width: "30%",
//     backgroundColor: Colors.WHITE,
//     borderRadius: moderateScale(12),
//     paddingVertical: verticalScale(15),
//     alignItems: "center",
//     marginBottom: verticalScale(12),
//     elevation: 2,
//   },
//   iconContainer: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: moderateScale(25),
//     padding: moderateScale(10),
//     marginBottom: verticalScale(6),
//   },
//   serviceText: {
//     fontSize: moderateScale(12),
//     color: Colors.TEXT,
//     textAlign: "center",
//     fontWeight: "600",
//   },
//   exclusiveSection: {
//     marginTop: verticalScale(20),
//     marginHorizontal: matter.spacing.m,
//   },
//   exclusiveCard: {
//     width: moderateScale(260),
//     height: verticalScale(130),
//     borderRadius: moderateScale(15),
//     overflow: "hidden",
//     marginRight: moderateScale(15),
//     backgroundColor: Colors.PRIMARY,
//     elevation: 3,
//   },
//   exclusiveImage: {
//     width: "100%",
//     height: "100%",
//     position: "absolute",
//     opacity: 0.2,
//   },
//   exclusiveOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: moderateScale(10),
//   },
//   exclusiveTitle: {
//     color: Colors.WHITE,
//     fontSize: moderateScale(14),
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: verticalScale(8),
//   },
//   getServiceBtn: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: moderateScale(20),
//     paddingVertical: verticalScale(5),
//     paddingHorizontal: moderateScale(15),
//   },
//   getServiceText: {
//     color: Colors.PRIMARY,
//     fontSize: moderateScale(12),
//     fontWeight: "600",
//   },
// });

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors.utils";

import { moderateScale, verticalScale } from "react-native-size-matters";
import i18n from "../../utils/i18n.utils";
import MainHeader from "../../components/MainHeader";
import { services } from "../../DATA/HomeData";
import ScreenWrapper from "../../components/ScreenWrapper";

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  const handlePress = (screen: string) => {
    if (screen) navigation.navigate(screen);
  };

  return (
    <ScreenWrapper
      header={<MainHeader title={i18n.t("appName")} showBell showBack />}
    >
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{i18n.t("popularServices")}</Text>

        <View style={styles.servicesContainer}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceBox}
              onPress={() => handlePress(service.screen)}
            >
              <View style={styles.iconContainer}>{service.icon}</View>
              <Text style={styles.serviceText}>{i18n.t(service.title)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

   
      <View style={styles.exclusiveSection}>
        <Text style={styles.sectionTitle}>
          {i18n.t("exclusiveServices") || "Exclusive Services"}
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.exclusiveCard}>
            <Image
              source={{ uri: "https://i.ibb.co/ZYDsJX4/parts2.jpg" }}
              style={styles.exclusiveImage}
            />
            <View style={styles.exclusiveOverlay}>
              <Text style={styles.exclusiveTitle}>
                {i18n.t("personalisedService") ||
                  "Personalised Service of Expert Advisors"}
              </Text>
              <TouchableOpacity style={styles.getServiceBtn}>
                <Text style={styles.getServiceText}>
                  {i18n.t("getService") || "Get the service"}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  section: {
    marginTop: verticalScale(20),
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: Colors.TEXT,
    marginBottom: verticalScale(10),
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceBox: {
    width: "30%",
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(9),
    alignItems: "center",
    marginBottom: verticalScale(12),
    elevation: 2,
  },
  iconContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(25),
    padding: moderateScale(10),
    marginBottom: verticalScale(6),
  },
  serviceText: {
    fontSize: moderateScale(12),
    color: Colors.TEXT,
    textAlign: "center",
    fontWeight: "600",
  },
  exclusiveSection: {
    marginTop: verticalScale(10),
  },
  exclusiveCard: {
    width: moderateScale(260),
    height: verticalScale(130),
    borderRadius: moderateScale(15),
    overflow: "hidden",
    marginRight: moderateScale(15),
    backgroundColor: Colors.PRIMARY,
    elevation: 3,
  },
  exclusiveImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.2,
  },
  exclusiveOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(10),
  },
  exclusiveTitle: {
    color: Colors.WHITE,
    fontSize: moderateScale(14),
    fontWeight: "700",
    textAlign: "center",
    marginBottom: verticalScale(8),
  },
  getServiceBtn: {
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(5),
    paddingHorizontal: moderateScale(15),
  },
  getServiceText: {
    color: Colors.PRIMARY,
    fontSize: moderateScale(12),
    fontWeight: "600",
  },
});
