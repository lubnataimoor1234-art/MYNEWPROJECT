
// // // import React from "react";
// // // import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
// // // import { Car, Wrench, ArrowLeft, UserCircle2, SkipBack } from "lucide-react-native";
// // // import Colors from "../../utils/colors.utils";
// // // import { useNavigation } from "@react-navigation/native";

// // // const Home = () => {
// // //   const navigation = useNavigation();

// // //   return (
// // //     <View style={styles.container}>
      
// // //       <View style={styles.header}>
// // //         <TouchableOpacity  onPress={() => navigation.goBack()}>
// // //           <ArrowLeft  size={26} color={Colors.PRIMARY} />
// // //         </TouchableOpacity>
// // //       </View>

// // //       <Text style={styles.title}>Welcome to FixMyRide</Text>
// // //       <Text style={styles.subtitle}>Choose your role to get started</Text>

   
// // //       <Pressable
// // //         style={({ pressed }) => [
// // //           styles.buttonPrimary,
// // //           pressed && { backgroundColor: Colors.PRIMARY },
// // //         ]}
// // //         onPress={() => navigation.navigate("MapScreen" as never)}
// // //       >
// // //         <Car size={22} color={Colors.DARK_GRAY} />
// // //         <Text style={styles.buttonTextAlt}>Driver / Rider</Text>
// // //       </Pressable>

    
// // //       <Pressable
// // //         style={({ pressed }) => [
// // //           styles.buttonSecondary,
// // //           pressed && { backgroundColor: Colors.PRIMARY, borderColor: Colors.PRIMARY },
// // //         ]}
// // //         onPress={() => navigation.navigate("ServiceProviderScreen" as never)}
// // //       >
// // //         <Wrench size={22} color={Colors.DARK_GRAY} />
// // //         <Text style={styles.buttonTextAlt}>Mechanic / Service Provider</Text>
// // //       </Pressable>
// // //     </View>
// // //   );
// // // };

// // // export default Home;

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: Colors.WHITE,
// // //     paddingHorizontal: 20,
// // //     paddingTop: 300,
// // //   }, 
// // //   header: {
// // //      top: 50,
// // //     left: 16,
// // //     position: "absolute",
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     marginBottom: 20,
// // //   },
 
// // //   title: {
// // //     fontSize: 22,
// // //     fontWeight: "700",
// // //     marginBottom: 8,
// // //     color: Colors.TEXT,
// // //     textAlign: "center",
// // //   },
// // //   subtitle: {
// // //     fontSize: 14,
// // //     color: Colors.DARK_GRAY,
// // //     marginBottom: 30,
// // //     textAlign: "center",
// // //   },
// // //   buttonPrimary: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     backgroundColor: Colors.PRIMARY,
// // //     paddingVertical: 14,
// // //     paddingHorizontal: 20,
// // //     borderRadius: 10,
// // //     marginBottom: 15,
// // //     width: "100%",
// // //     justifyContent: "center",
// // //   },
// // //   buttonSecondary: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     backgroundColor: Colors.BORDER_GREY,
// // //     paddingVertical: 14,
// // //     paddingHorizontal: 20,
// // //     borderRadius: 10,
// // //     width: "100%",
// // //     justifyContent: "center",
// // //   },
// // //   buttonTextAlt: {
// // //     color: Colors.DARK_GRAY,
// // //     fontSize: 16,
// // //     fontWeight: "600",
// // //     marginLeft: 8,
// // //   },
// // // });

// // import React from "react";
// // import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// // import { Car, Wrench, ArrowLeft } from "lucide-react-native";
// // import Colors from "../../utils/colors.utils";
// // import matter from "../../utils/matter.utils";
// // import CustomHeader from "../../components/CustomHeader";
// // import strings from "../../utils/strings.utils";

// // import { useNavigation } from "@react-navigation/native";
// // import AppButton from "../../components/AppButton";

// // const Home = () => {
// //   const navigation = useNavigation();

// //   return (
// //     <View style={styles.container}>
// //       <CustomHeader title="Hi.."
// //       subtitle="Ghulam NABI" 
// //        showBack 
// //        showProfile={false}/>
// //       <Text style={styles.title}>{strings.home.title}</Text>
// //       <Text style={styles.subtitle}>{strings.home.subtitle}</Text>

// //       <AppButton
// //         title={strings.home.driverBtn}
// //         onPress={() => navigation.navigate("MapScreen" as never)}
// //         icon={<Car size={22} color={Colors.WHITE} />}
// //         type="primary"'
// //       />

// //       <AppButton
// //         title={strings.home.mechanicBtn}
// //         onPress={() => navigation.navigate("ServiceProviderScreen" as never)}
// //         icon={<Wrench size={22} color={Colors.PRIMARY} />}
// //         type="secondary"
// //       />
// //     </View>
// //   );
// // };

// // export default Home;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: Colors.WHITE,
   
// //   },
// //   title: {
// //     fontSize: matter.fontSize.lg,
// //     fontWeight: "900",
// //     marginBottom: matter.spacing.s,
// //     color: Colors.TEXT,
// //     textAlign: "center",
// //     paddingTop: 150,
// //   },
// //   subtitle: {
// //     fontSize: matter.fontSize.sm,
// //     color: Colors.DARK_GRAY,
// //     marginBottom: matter.spacing.xl,
// //     textAlign: "center",
// //   },
// // });


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
//   Bell,
// } from "lucide-react-native";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import CustomHeader from "../../components/CustomHeader";
// import { useNavigation } from "@react-navigation/native";
// import strings from "../../utils/strings.utils";
//  import AppButton from "../../components/AppButton";
// const services = [
//   { id: 1, title: "Service At Garage", icon: <Wrench color={Colors.PRIMARY} size={28} /> },
//   { id: 2, title: "Door Step Service", icon: <Home color={Colors.PRIMARY} size={28} /> },
//   { id: 3, title: "Emergency Service", icon: <AlertTriangle color={Colors.PRIMARY} size={28} /> },
//   { id: 4, title: "Shop Spare Parts", icon: <ShoppingCart color={Colors.PRIMARY} size={28} /> },
//   { id: 5, title: "Rent A Car", icon: <Key color={Colors.PRIMARY} size={28} /> },
//   { id: 6, title: "Insurance Service", icon: <ShieldCheck color={Colors.PRIMARY} size={28} /> },
// ];

// const HomeScreen = () => {
//      const navigation = useNavigation();
//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       <View style={styles.headerContainer}>
//         <View style={styles.headerLeft}>
//           <Image
//             source={{ uri: "https://i.ibb.co/nbZyqn7/logo-siana.png" }}
//             style={styles.logo}
//           />
//         </View>
//         <View style={styles.headerRight}>
//           <TouchableOpacity style={styles.iconButton}>
//             <Bell color={Colors.WHITE} size={22} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* AD Banner Section */}
//       <View style={styles.adBannerContainer}>
//          <Text style={styles.sectionTitle}>Services</Text>  
         
//       </View>

//       {/* Services Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Services</Text>
//         <View style={styles.servicesContainer}>
//           {services.map((service) => (
//             <TouchableOpacity key={service.id} style={styles.serviceBox}>
//               <View style={styles.iconContainer}>{service.icon}</View>
//               <Text style={styles.serviceText}>{service.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//   {/* <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Services</Text>
//         <View style={styles.servicesContainer}>
//           {services.map((service) => (
//             <TouchableOpacity key={service.id} style={styles.serviceBox}>
//               <View style={styles.iconContainer}>{service.icon}</View>
//               <Text style={styles.serviceText}>{service.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View> */}

//       <AppButton
//         title={strings.home.driverBtn}
//         onPress={() => navigation.navigate("MapScreen" as never)}
//         icon={<Car size={22} color={Colors.WHITE} />}
//         type="primary"
//       />

//       <AppButton
//         title={strings.home.mechanicBtn}
//         onPress={() => navigation.navigate("ServiceProviderScreen" as never)}
//         icon={<Wrench size={22} color={Colors.PRIMARY} />}
//         type="secondary"
//       />

     
//     </ScrollView>
//   );
// };

// export default HomeScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.BORDER_GREY ,
//   },
//    headerContainer: {
//     backgroundColor: Colors.PRIMARY,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 15,
//     paddingTop: 40,
//     paddingBottom: 15,
//   },
//   logo: {
//     width: 100,
//     height: 35,
//     resizeMode: "contain",
//   },
//   headerLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   headerRight:{
// flexDirection: "row",
//     alignItems: "center",
//   },
//   iconButton: {
//     backgroundColor: "rgba(255,255,255,0.2)",
//     padding: 8,
//     borderRadius: 25,
//   },

//   // ===== AD BANNER =====
//   adBannerContainer: {
//     height: 180,
//     width: "100%",
//     backgroundColor: Colors.WHITE,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   adImage: {
//     width: "92%",
//     height: "90%",
//     resizeMode: "cover",
//     borderRadius: 14,
//   },

//   banner: {
//     backgroundColor: "#E0F2F1",
//     borderRadius: 15,
//     marginHorizontal: matter.spacing.m,
//     marginTop: 15,
//     padding: 15,
//     position: "relative",
//   },
//   offerTag: {
//     position: "absolute",
//     top: 10,
//     left: 10,
//     backgroundColor: Colors.PRIMARY,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 5,
//   },
//   offerText: {
//     color: Colors.WHITE,
//     fontSize: 10,
//     fontWeight: "700",
//   },
//   bannerImage: {
//     width: "100%",
//     height: 120,
//     resizeMode: "contain",
//     marginBottom: 10,
//   },
//   bannerTextContainer: { alignItems: "flex-start" },
//   bannerTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: Colors.PRIMARY,
//   },
//   bannerSubtitle: {
//     fontSize: 14,
//     color: Colors.TEXT,
//     marginVertical: 4,
//   },
//   bannerFeatures: {
//     fontSize: 12,
//     color: Colors.DARK_GRAY,
//   },

//   section: {
//     marginTop: 20,
//     marginHorizontal: matter.spacing.m,
//   },
//   sectionTitle: {
//     fontSize: 16,
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
//   },
//   iconContainer: {
//     backgroundColor: "#E8F5E9",
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

//   exclusiveCard: {
//     backgroundColor: "#EDE7F6",
//     borderRadius: 12,
//     padding: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   exclusiveImage: {
//     width: 100,
//     height: 60,
//     resizeMode: "contain",
//     marginRight: 10,
//   },
//   exclusiveTitle: {
//     fontSize: 13,
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginBottom: 6,
//   },
//   getServiceBtn: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     alignSelf: "flex-start",
//   },
//   getServiceText: {
//     color: Colors.WHITE,
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
// import {
//   Car,
//   Wrench,
//   Home,
//   AlertTriangle,
//   ShoppingCart,
//   Key,
//   ShieldCheck,
//   Bell,
//   ArrowLeft,
// } from "lucide-react-native";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import { useNavigation } from "@react-navigation/native";
// import strings from "../../utils/strings.utils";
// import AppButton from "../../components/AppButton";
// import CustomHeader from "../../components/CustomHeader";
// const services = [
//   { id: 1, title: "Service At Garage", icon: <Wrench color={Colors.PRIMARY} size={28} /> },
//   { id: 2, title: "Door Step Service", icon: <Home color={Colors.PRIMARY} size={28} /> },
//   { id: 3, title: "Emergency Service", icon: <AlertTriangle color={Colors.PRIMARY} size={28} /> },
//   { id: 4, title: "Shop Spare Parts", icon: <ShoppingCart color={Colors.PRIMARY} size={28} /> },
//   { id: 5, title: "Rent A Car", icon: <Key color={Colors.PRIMARY} size={28} /> },
//   { id: 6, title: "Insurance Service", icon: <ShieldCheck color={Colors.PRIMARY} size={28} /> },
// ];

// const ads = [
//   {
//     id: 1,
//     title: "Best Mechanic Near You",
//     image: "https://i.ibb.co/3CC6Pdg/mechanic1.jpg",
//   },
//   {
//     id: 2,
//     title: "Get Discounted Parts",
//     image: "https://i.ibb.co/ZYDsJX4/parts2.jpg",
//   },
// ];

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

//  <CustomHeader
//         title="FixMYRide"
//        showBell={true}
//         showBack
        
//       />

//       {/* <View style={styles.headerContainer}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <ArrowLeft color={Colors.WHITE} size={22} />
//         </TouchableOpacity>
//          <Text style={styles.headerTitle}>FixMyRide</Text>
//         <Image
//           source={{ uri: "https://i.ibb.co/nbZyqn7/logo-siana.png" }}
//           style={styles.logo}
//         />

//         <TouchableOpacity style={styles.iconButton}>
//           <Bell color={Colors.WHITE} size={22} />
//         </TouchableOpacity>
//       </View> */}

     

//       {/* ===== SERVICES ===== */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Services</Text>
//         <View style={styles.servicesContainer}>
//           {services.map((service) => (
//             <TouchableOpacity key={service.id} style={styles.serviceBox}>
//               <View style={styles.iconContainer}>{service.icon}</View>
//               <Text style={styles.serviceText}>{service.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       {/* ===== ACTION BUTTONS ===== */}
//       <AppButton
//         title={strings.home.driverBtn}
//         onPress={() => navigation.navigate("MapScreen" as never)}
//         icon={<Car size={22} color={Colors.WHITE} />}
//         type="primary"
//       />

//       <AppButton
//         title={strings.home.mechanicBtn}
//         onPress={() => navigation.navigate("ServiceProviderScreen" as never)}
//         icon={<Wrench size={22} color={Colors.PRIMARY} />}
//         type="secondary"
//       />

//       {/* ===== AD BANNER (horizontal scroll) ===== */}
//        <View style={styles.adContainer}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {ads.map((item) => (
//             <View key={item.id} style={styles.adBox}>
//               <Image source={{ uri: item.image }} style={styles.adImage} />
//               <Text style={styles.adText}>{item.title}</Text>
//             </View>
//           ))}
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
//   // ===== HEADER =====
//   headerContainer: {
//     backgroundColor: Colors.PRIMARY,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 15,
//     paddingTop: 40,
//     paddingBottom: 15,
//   },
//   headerTitle: {
//     color: Colors.WHITE,
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     position: "absolute", // ✅ keep it centered regardless of side buttons
//     left: 0,
//     right: 50,
//   },
//   backButton: {
//     backgroundColor: "rgba(255,255,255,0.2)",
//     padding: 8,
//     borderRadius: 25,
//   },
//   logo: {
//     width: 100,
//     height: 35,
//     resizeMode: "contain",
//   },
//   iconButton: {
//     backgroundColor: "rgba(255,255,255,0.2)",
//     padding: 8,
//     borderRadius: 25,
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

//   // ===== SERVICES =====
//   section: {
//     marginTop: 20,
//     marginHorizontal: matter.spacing.m,
//   },
//   sectionTitle: {
//     fontSize: 16,
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
//   },
//   iconContainer: {
//     backgroundColor: "#E8F5E9",
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
import {
  Car,
  Wrench,
  Home,
  AlertTriangle,
  ShoppingCart,
  Key,
  ShieldCheck,
} from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import { useNavigation } from "@react-navigation/native";
import strings from "../../utils/strings.utils";
import AppButton from "../../components/AppButton";
import CustomHeader from "../../components/CustomHeader";
import ServiceAtGarage from "./ServiceAtGarage";


const services = [
  { id: 1, title: "Service At Garage", icon: <Wrench color={Colors.PRIMARY} size={28} />, screen: "ServiceAtGarage" },
  { id: 2, title: "Door Step Service", icon: <Home color={Colors.PRIMARY} size={28} />, screen: "DoorStepServiceScreen" },
  { id: 3, title: "Emergency Service", icon: <AlertTriangle color={Colors.PRIMARY} size={28} />, screen: "EmergencyServiceScreen" },
  { id: 4, title: "Shop Spare Parts", icon: <ShoppingCart color={Colors.PRIMARY} size={28} />, screen: "ShopSparePartsScreen" },
  { id: 5, title: "Rent A Car", icon: <Key color={Colors.PRIMARY} size={28} />, screen: "RentACarScreen" },
  { id: 6, title: "Insurance Service", icon: <ShieldCheck color={Colors.PRIMARY} size={28} />, screen: "InsuranceServiceScreen" },
];

// // ✅ Ads Section
// const ads = [
//   // <View style={styles.imageContainer}>
//   //         <Image
//   //           source={require("../../assets/pngs/image1.png")} 
//   //           style={styles.image}
//   //           resizeMode="contain"
//   //         />
//   //       </View>
//   {
//     id: 1,
//     title: "Best Mechanic Near You",
//     //image: ("../../assets/pngs/pic.jpg",
//   },
//   {
//     id: 2,
//     title: "Get Discounted Parts",
//     image: "https://i.ibb.co/ZYDsJX4/parts2.jpg",
//   },
// ];



const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const handleServicePress = (ServiceAtGarage: string) => {
    if (ServiceAtGarage) {
      navigation.navigate( ServiceAtGarage as never);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ===== HEADER ===== */}
      <CustomHeader
        title="FixMyRide"
        showBell={true}
        showBack={true}
      />

      {/* ===== SERVICES ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.servicesContainer}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceBox}
              onPress={() => handleServicePress(service.screen)}
            >
              <View style={styles.iconContainer}>{service.icon}</View>
              <Text style={styles.serviceText}>{service.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ===== ACTION BUTTONS ===== */}
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
      <View style={styles.exclusiveSection}>
        <Text style={styles.sectionTitle}>Exclusive Services</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.exclusiveCard}>
            <Image
               source={{ uri: "https://i.ibb.co/ZYDsJX4/parts2.jpg" }}
              style={styles.exclusiveImage}
            />
            <View style={styles.exclusiveOverlay}>
              <Text style={styles.exclusiveTitle}>Personalised Service of Expert Advisors</Text>
              <TouchableOpacity style={styles.getServiceBtn}>
                <Text style={styles.getServiceText}>Get the service</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.exclusiveCard, { backgroundColor: Colors.RED }]}>
            <Image
              source={{ uri: "https://i.ibb.co/ZYDsJX4/parts2.jpg" }}
              style={styles.exclusiveImage}
            />
            <View style={styles.exclusiveOverlay}>
              <Text style={styles.exclusiveTitle}>Personalised Care for Women Car Owners</Text>
              <TouchableOpacity style={styles.getServiceBtn}>
                <Text style={styles.getServiceText}>Get the service</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BORDER_GREY,
  },

  // ===== SERVICES =====
  section: {
    marginTop: 20,
    marginHorizontal: matter.spacing.m,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.TEXT,
    marginBottom: 10,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceBox: {
    width: "30%",
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 15,
    elevation: 2,
  },
  iconContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    padding: 10,
    marginBottom: 6,
  },
  serviceText: {
    fontSize: 12,
    color: Colors.TEXT,
    textAlign: "center",
    fontWeight: "600",
  },

  // ===== AD SECTION =====
  adContainer: {
    marginTop: 10,
    paddingVertical: 10,
  },
  adBox: {
    width: 250,
    height: 130,
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    marginHorizontal: 10,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  adImage: {
    width: "100%",
    height: "75%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },
  adText: {
    fontSize: 14,
    color: Colors.TEXT,
    fontWeight: "600",
    paddingTop: 6,
    textAlign: "center",
  },
    // ===== EXCLUSIVE SERVICES =====
  exclusiveSection: {
    marginTop: 20,
    marginHorizontal: matter.spacing.m,
  },
  exclusiveCard: {
    width: 260,
    height: 130,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 15,
    backgroundColor: "#6C63FF",
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
    padding: 10,
  },
  exclusiveTitle: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  getServiceBtn: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  getServiceText: {
    color: Colors.PRIMARY,
    fontSize: 12,
    fontWeight: "600",
  },

});
