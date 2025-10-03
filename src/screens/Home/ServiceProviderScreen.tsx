// // src/screens/Service/ServiceProviderScreen.tsx
// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { Car, Bike } from "lucide-react-native";
// import Colors from "../../utils/colors.utils";

// const ServiceProviderScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>What seems to be the trouble?</Text>
//       <Text style={styles.subtitle}>Select your vehicle type</Text>

//       {/* Car */}
//       <TouchableOpacity style={styles.option}>
//         <Car size={24} color={Colors.PRIMARY} />
//         <Text style={styles.optionText}>Car</Text>
//       </TouchableOpacity>

//       {/* Motorcycle */}
//       <TouchableOpacity style={styles.option}>
//         <Bike size={24} color={Colors.PRIMARY} />
//         <Text style={styles.optionText}>Motorcycle</Text>
//       </TouchableOpacity>

//       {/* Continue Button */}
//       <TouchableOpacity style={styles.continueBtn}>
//         <Text style={styles.continueText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//     padding: 20,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: Colors.DARK_GRAY,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   option: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 15,
//     borderRadius: 12,
//     backgroundColor: Colors.BORDER_GREY,
//     marginBottom: 15,
//   },
//   optionText: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginLeft: 12,
//     color: Colors.TEXT,
//   },
//   continueBtn: {
//     marginTop: 20,
//     backgroundColor: Colors.PRIMARY,
//     padding: 16,
//     borderRadius: 12,
//     alignItems: "center",
//   },
//   continueText: {
//     color: Colors.WHITE,
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

// export default ServiceProviderScreen;



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

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Colors from "../../utils/colors.utils";
import {
  Menu,
  UserCircle2,
  Car,
  Wrench,
  Bike,
  Droplets,
  Zap,
  ArrowLeft,
  Truck,
} from "lucide-react-native";


const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
         <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft size={28} color={Colors.PRIMARY} />
          </TouchableOpacity>
           <Text style={styles.headerTitle}>FixMyRide</Text>
          <TouchableOpacity>
            <UserCircle2 size={24} color={Colors.PRIMARY} />
          </TouchableOpacity>
        </View> 

        {/* Book Ride */}

        <TouchableOpacity style={styles.bookRideCard}>
          
          <Text style={styles.bookRideText}>Book a ride</Text>
          <Car size={60} color={Colors.WHITE} strokeWidth={1.5} />
        </TouchableOpacity>
<Text style={{ fontSize: 15,color: Colors.TEXT, marginBottom: 20}}>Select your vehical type</Text>

        {/* Services */}

        <View style={styles.servicesContainer}>
          <TouchableOpacity  style={styles.serviceBox}
  onPress={() => navigation.navigate("WhatsWrongScreen" as never)} >
  <Car size={40} color={Colors.PRIMARY} strokeWidth={1.5} />
  <Text style={styles.serviceText}>Car Repair</Text>
</TouchableOpacity>
         
          <TouchableOpacity 
  style={styles.serviceBox}
  onPress={() => navigation.navigate("bikeHome" as never)}  >
  <Bike size={40} color={Colors.PRIMARY} strokeWidth={1.5} />
  <Text style={styles.serviceText}>Bike Repair</Text>
</TouchableOpacity>
            
       

          <TouchableOpacity style={styles.serviceBox}>
            <Truck size={40} color={Colors.PRIMARY} strokeWidth={1.5} />
            <Text style={styles.serviceText}>Pickup Trucks</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceBox}>
            <Zap size={30} color={Colors.PRIMARY} strokeWidth={1.5} />
            <Text style={styles.serviceText}>Emergency Help</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Continue Button at Bottom */}
      <View style={styles.bottomButtonContainer}> 
        <TouchableOpacity style={styles.continueButton}>
  
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.PRIMARY,
  },
  bookRideCard: {
    backgroundColor: Colors.PRIMARY,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 50,
    borderRadius: 12,
    marginBottom: 20,
  },
  bookRideText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  servicesContainer: {
    flexWrap: "wrap",
      flexDirection: "column",
  },
  serviceBox: {
    width: "100%",
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: "center",
     flexDirection: "row",      
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    elevation: 2,
  },
  serviceText: {
    marginLeft:12,
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: Colors.TEXT,
  },
   backButton: { padding: 10 },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
  continueButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  continueText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "bold",
  },
});
 