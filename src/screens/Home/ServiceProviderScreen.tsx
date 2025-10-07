

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { useNavigation, DrawerActions } from "@react-navigation/native";
// import Colors from "../../utils/colors.utils";
// import {
//   Menu,
//   UserCircle2,
//   Car,
//   Wrench,
//   Bike,
//   Droplets,
//   Zap,
//   ArrowLeft,
//   Truck,
// } from "lucide-react-native";

// import CustomHeader from "../../components/CustomHeader";
// import matter from "../../utils/matter.utils";
// import strings from "../../utils/strings.utils";
// const Home = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.wrapper}>
//       <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
//         {/* Header */}
//          <CustomHeader location="123 Main Street, Downtown" showProfile />
//       <Text style={styles.title}>{strings.bikeTrouble.title}</Text>
//       <Text style={styles.subtitle}>{strings.bikeTrouble.subtitle}</Text>
//          {/* <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <ArrowLeft size={28} color={Colors.PRIMARY} />
//           </TouchableOpacity>
//            <Text style={styles.headerTitle}>FixMyRide</Text>
//           <TouchableOpacity>
//             <UserCircle2 size={24} color={Colors.PRIMARY} />
//           </TouchableOpacity>
//         </View>  */}

//         {/* Book Ride */}

//         {/* <TouchableOpacity style={styles.bookRideCard}>
          
//           <Text style={styles.bookRideText}>Book a ride</Text>
//           <Car size={60} color={Colors.WHITE} strokeWidth={1.5} />
//         </TouchableOpacity>
// <Text style={{ fontSize: 15,color: Colors.TEXT, marginBottom: 20}}>Select your vehical type</Text> */}

//         {/* Services */}

//         <View style={styles.servicesContainer}>
//           <TouchableOpacity  style={styles.serviceBox}
//   onPress={() => navigation.navigate("bikeHome" as never)} >
//   <Car size={40} color={Colors.PRIMARY} strokeWidth={1.5} />
//   <Text style={styles.serviceText}>Car Repair</Text>
// </TouchableOpacity>
         
//           <TouchableOpacity 
//   style={styles.serviceBox}
//   onPress={() => navigation.navigate("bikeHome" as never)}  >
//   <Bike size={40} color={Colors.PRIMARY} strokeWidth={1.5} />
//   <Text style={styles.serviceText}>Bike Repair</Text>
// </TouchableOpacity>
          
//           <TouchableOpacity style={styles.serviceBox}>
//             <Truck size={40} color={Colors.PRIMARY} strokeWidth={1.5} />
//             <Text style={styles.serviceText}>Pickup Trucks</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.serviceBox}>
//             <Zap size={30} color={Colors.PRIMARY} strokeWidth={1.5} />
//             <Text style={styles.serviceText}>Emergency Help</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: Colors.BACKGROUND,
//   },
//   container: {
//     flex: 1,
//    // paddingHorizontal: 16,
//     //paddingTop: 50,
//   },
//    title: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: Colors.TEXT,
//     textAlign: "center",
//     marginBottom: 5,

//   },
//   subtitle: {
//     fontSize: 14,
//     color: Colors.BORDER_GREY,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   // header: {
//   //   flexDirection: "row",
//   //   justifyContent: "space-between",
//   //   alignItems: "center",
//   //   marginBottom: 10,
//   // },
//   // headerTitle: {
//   //   fontSize: 20,
//   //   fontWeight: "bold",
//   //   color: Colors.PRIMARY,
//   // },
//   // bookRideCard: {
//   //   backgroundColor: Colors.PRIMARY,
//   //   flexDirection: "row",
//   //   justifyContent: "space-between",
//   //   alignItems: "center",
//   //   padding: 50,
//   //   borderRadius: 12,
//   //   marginBottom: 20,
//   // },
//   // bookRideText: {
//   //   fontSize: 30,
//   //   fontWeight: "bold",
//   //   color: Colors.WHITE,
//   // },
//   servicesContainer: {
//     flexWrap: "wrap",
//       flexDirection: "column",
//        paddingHorizontal: 16,
//   },
//   serviceBox: {
//     width: "100%",
//     backgroundColor: Colors.WHITE,
//     borderRadius: 12,
//     paddingVertical: 8,
//     alignItems: "center",
//      flexDirection: "row",      
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//     elevation: 2,
//      paddingHorizontal: 16,
//   },
//   serviceText: {
//     marginLeft:12,
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: "500",
//     color: Colors.TEXT,
//   },
//    backButton: { padding: 10 },

// });





import React,{ useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/colors.utils";
import { Car, Bike, Truck, Zap,  MoveRight, } from "lucide-react-native";

import CustomHeader from "../../components/CustomHeader";
import matter from "../../utils/matter.utils";
import strings from "../../utils/strings.utils";

const Home = () => {
  const navigation = useNavigation();
const [search, setSearch] = useState("");
  return (
   <View  style={styles.container}>
    <CustomHeader
        title="Service Provider"
        showSearch 
       onSearchChange={setSearch} 
        showProfile
        showBack
      />
   <Text style={styles.title}>{strings.bikeTrouble.title}</Text>
          <Text style={styles.subtitle}>{strings.bikeTrouble.subtitle}</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: matter.spacing.l }}>

        {/* White Card Container */}
        <View style={styles.cardContainer}>
      
          <View style={styles.servicesContainer}>
            <TouchableOpacity
              style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
              {/* <Car size={20} color={Colors.PRIMARY} /> */}
              <Text style={styles.serviceText}>🚗 Car Repair</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
              {/* <Bike size={20} color={Colors.PRIMARY} /> */}
              <Text style={styles.serviceText}>🏍️ Bike Repair</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.serviceBox}>
              {/* <Truck size={20} color={Colors.PRIMARY} /> */}
              <Text style={styles.serviceText}> 🚚 Pickup Trucks</Text>
            </TouchableOpacity>

            <View style={styles.servicesContainer}>
  <TouchableOpacity style={styles.serviceBox}>
    {/* <Bike size={24} color={Colors.PRIMARY} /> */}
    <Text style={styles.serviceText}>🛵 Scooter</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.serviceBox}>
    {/* <Truck size={24} color={Colors.PRIMARY} /> */}
    <Text style={styles.serviceText}>🚛 Lorry</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.serviceBox}>
    {/* <MoveRight size={24} color={Colors.PRIMARY} /> */}
    <Text style={styles.serviceText}>🛺 Rickshaw</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.serviceBox}>
    {/* <Car size={24} color={Colors.PRIMARY} /> */}
    <Text style={styles.serviceText}>🚘 Mini Car</Text>
  </TouchableOpacity>
  </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
 
  container: {
    flex: 1, 
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: matter.padding.screen,
  },
  title: {
    fontSize: matter.fontSize.lg,
    fontWeight: "700",
    color: Colors.WHITE,
    textAlign: "center",
    marginBottom: matter.spacing.s,
   
  },
  subtitle: {
    fontSize: matter.fontSize.sm,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
   marginBottom: matter.spacing.l,
  },
  cardContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: matter.radius.lg * 2,
    borderTopRightRadius: matter.radius.lg * 2,
    paddingVertical: matter.spacing.l,
    paddingHorizontal: matter.padding.screen,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    
  },
  servicesContainer: {
    flexDirection: "column",
  },
  serviceBox: {
    width: "100%",
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    paddingVertical: matter.padding.buttonV,
    paddingHorizontal: matter.padding.buttonH,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: matter.spacing.m,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY, 
    elevation: 2,
 
  },
  serviceText: {
    marginLeft: matter.spacing.s,
    fontSize: matter.fontSize.sm,
    fontWeight: "500",
    color: Colors.TEXT,
  },
});

