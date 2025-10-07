
// import React, { useState, useLayoutEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Colors from '../../utils/colors.utils';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LocationModal from '../../components/LocationModal'; 

// const Home = () => {
//   const [locationModalVisible, setLocationModalVisible] = useState(false);
//   const navigation = useNavigation<any>();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//       headerLeft: () => (
//         <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
//           <Icon name="menu" size={28} color="#000" />
//         </TouchableOpacity>
//       ),
//     });
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       {/* Map */}
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 24.8607,
//           longitude: 67.0011,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         }}
//       >
//         <Marker coordinate={{ latitude: 24.8607, longitude: 67.0011 }} />
//       </MapView>

//       {/* Header */}
//       <View style={styles.header}>
//         <Text style = {styles.headerText}>Home</Text>
//         <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
//           <Icon name="menu-outline" size={28} color="#FFFFFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Sheet */}
//       <View style={styles.bottomSheet}>
//         {/* Ride Types */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rideOptionsScroll}>
//           <View style={styles.rideOptionItem}><Text>🚲 Moto</Text></View>
//           <View style={styles.rideOptionItem}><Text>🚗 Ride Mini</Text></View>
//           <View style={styles.rideOptionItem}><Text>🛺 Auto</Text></View>
//           <View style={styles.rideOptionItem}><Text>❄️ Ride A/C</Text></View>
//           <View style={styles.rideOptionItem}><Text>🚕 Sedan</Text></View>
//           <View style={styles.rideOptionItem}><Text>🚐 Van</Text></View>
//           <View style={styles.rideOptionItem}><Text>🛻 Pickup</Text></View>
//         </ScrollView>

//         {/* Search Info */}
//         <Text style={styles.searchingText}>🟢 Searching for you on the map...</Text>

//         {/* "To" Input (Touchable with icon) */}
//         <TouchableOpacity
//           style={styles.Input}
//           onPress={() => setLocationModalVisible(true)}
//         >
//           <Icon name="location-outline" size={20} color={Colors.DARK_GRAY} />
//           <TextInput
//             placeholder="To"
//             placeholderTextColor={Colors.DARK_GRAY}
//             editable={false}
//             style={{ flex: 1, marginLeft: 10 }}
//           />
//           <Icon name="map-outline" size={20} color={Colors.DARK_GRAY} />
//         </TouchableOpacity>

//         {/* Modal */}
//         <LocationModal
//           visible={locationModalVisible}
//           onClose={() => setLocationModalVisible(false)}
//         />

//         {/* Fare Input */}
//         <TextInput placeholder="PKR Offer your fare" style={styles.input} />

//         {/* Button */}
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Find a driver</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   map: { flex: 1 },
//   header: {
//     position: 'absolute',
//     top: 0,
//     width: '100%',
//     backgroundColor: Colors.PRIMARY,
//     padding: 15,
//     paddingTop: 40,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerText:{
//     alignItems: 'center',
//   },
//   menuButton: {
//     padding: 5,
//     marginRight: 10,
//   },
//   bottomSheet: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     backgroundColor: Colors.BACKGROUND,
//     padding: 15,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 20,
//   },
//   rideOptionsScroll: {
//     marginBottom: 10,
//   },
//   rideOptionItem: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     backgroundColor: Colors.BORDER_GREY,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   searchingText: {
//     marginVertical: 8,
//     color: Colors.TEXT,
//   },
//   Input: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: Colors.BORDER_GREY,
//     padding: 12,
//     borderRadius: 8,
//     marginVertical: 5,
//   },
//   input: {
//     backgroundColor: Colors.BORDER_GREY,
//     padding: 10,
//     borderRadius: 8,
//     marginVertical: 5,
//   },
//   button: {
//     backgroundColor: Colors.DARK_GRAY,
//     padding: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     fontWeight: 'bold',
//     color: '#000',
//     fontSize: 16,
//   },
// });


// import React from "react";

// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Colors from "../../utils/colors.utils";
// import {
//   Bell,
//   MapPin,
//   Menu,
//   UserCircle2,
//   Car,
//   Wrench,
//   Bike,
//   Droplets,
//   ShowerHead,
//   Zap,
// } from "lucide-react-native";
// import { DrawerNavigationProp } from "@react-navigation/drawer";
// import { DrawerParamList } from "../../navigation/MainDrawer";
// import { DrawerActions } from "@react-navigation/native";
// const Home = () => {
  
//   const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
//           <Menu size={28} color={Colors.PRIMARY} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Home</Text>
//         <TouchableOpacity>
//           <UserCircle2 size={24} color={Colors.PRIMARY} />
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={styles.bookRideCard}>
//         <Text style={styles.bookRideText}>Book a ride</Text>
//           <Car size={60} color={Colors.WHITE} strokeWidth={1.5} />
//       </TouchableOpacity>

 
//       <View style={styles.servicesContainer}>
//         <TouchableOpacity style={styles.serviceBox}>
//   <View style={styles.iconRow}>
//     <Car size={60} color={Colors.PRIMARY} strokeWidth={1.5}  />
//     <Wrench size={30} color={Colors.PRIMARY} strokeWidth={1.5} />
//   </View>
//   <Text style={styles.serviceText}>Car Repair</Text>
// </TouchableOpacity>

//         <TouchableOpacity style={styles.serviceBox}>
//           <Bike size={60} color={Colors.PRIMARY} strokeWidth={1.5} />
//           <Text style={styles.serviceText}>Bike Repair</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.serviceBox}>
//            <Droplets size={30} color={Colors.PRIMARY}  strokeWidth={1.5} />
//           <Car size={60} color={Colors.PRIMARY} strokeWidth={1.5}  />
         
//           <Text style={styles.serviceText}>Car Wash</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.serviceBox}>
//           <Zap size={60} color={Colors.PRIMARY}  strokeWidth={1.5}/>
//           <Text style={styles.serviceText}>Emergency Help</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.BACKGROUND,
//     paddingHorizontal: 16,
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: Colors.TEXT,
//   },
//   bookRideCard: {
//     backgroundColor: Colors.PRIMARY,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 50,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   bookRideText: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: Colors.WHITE,
//   },
//   servicesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   serviceBox: {
//     width: "48%",
//     backgroundColor: Colors.WHITE,
//     borderRadius: 12,
//     paddingVertical: 20,
//     alignItems: "center",
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//     elevation: 2,
//   },
//   serviceText: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: "500",
//     color: Colors.TEXT,
//   },
//   iconRow: {
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "center",
//   gap:1, 
// },

// });


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

import strings from "../../utils/strings.utils";

import { useNavigation } from "@react-navigation/native";
import AppButton from "../../components/AppButton";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={26} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>

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
    paddingHorizontal: matter.padding.screen,
    paddingTop: 300,
  },
  header: {
    top: 50,
    left: matter.spacing.m,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: matter.fontSize.lg,
    fontWeight: "700",
    marginBottom: matter.spacing.s,
    color: Colors.TEXT,
    textAlign: "center",
  },
  subtitle: {
    fontSize: matter.fontSize.sm,
    color: Colors.DARK_GRAY,
    marginBottom: matter.spacing.xl,
    textAlign: "center",
  },
});
