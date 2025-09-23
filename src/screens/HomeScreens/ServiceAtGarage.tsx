// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from "react-native";
// import {
//   ArrowLeft,
//   MapPin,
//   Car,
//   Wrench,
//   Settings2,
//   Disc,
//   CarFront,
  
//   Plug,
//   Fan,
//   Hammer,
// } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import strings from "../../utils/strings.utils";
// import { moderateScale, verticalScale } from "react-native-size-matters";
// import CustomHeader from "../../components/CustomHeader";
// const ServiceAtGarageScreen = () => {
//   const navigation = useNavigation<any>();

//   const services = [
//     {
//       title: "Periodic Maintenance",
//       items: [
//         { icon: <Car color={Colors.PRIMARY} size={26} />, label: "Quick" },
//         { icon: <Wrench color={Colors.PRIMARY} size={26} />, label: "Major" },
//         { icon: <Settings2 color={Colors.PRIMARY} size={26} />, label: "Regular" },
//       ],
//     },
//     {
//       title: "Specialized Services",
//       items: [
//         { icon: <Fan color={Colors.PRIMARY} size={26} />, label: "Modification" },
//         { icon: <Hammer color={Colors.PRIMARY} size={26} />, label: "Car Care" },
//         { icon: <Disc color={Colors.PRIMARY} size={26} />, label: "Wheels & Tyres" },
//       ],
//     },
//     {
//       title: "General Repairs",
//       items: [
//         { icon: <Settings2 color={Colors.PRIMARY} size={26} />, label: "Engine" },
//         { icon: <Disc color={Colors.PRIMARY} size={26} />, label: "Brake" },
//         { icon: <CarFront color={Colors.PRIMARY} size={26} />, label: "Body" },
//         { icon: <Wrench color={Colors.PRIMARY} size={26} />, label: "Gear Box" },
//         {
//           icon: <Car color={Colors.PRIMARY} size={26} />,
//           label: "Steering & Suspension",
//         },
//         { icon: <Plug color={Colors.PRIMARY} size={26} />, label: "Electrical" },
//         { icon: <Fan color={Colors.PRIMARY} size={26} />, label: "AC Repair" },
//       ],
//     },
//   ];

//   return (
//    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      
//         {/* Header */}
//         <CustomHeader
//         title="Service AT Garage"
//         showBell={true}
//         showBack={true}
//       />

// <ScrollView showsVerticalScrollIndicator={false}>
        

//         {/* Sections */}
//         {services.map((section, index) => (
//           <View key={index} style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>{section.title}</Text>

//             <View style={styles.gridContainer}>
//               {section.items.map((item, i) => (
//                 <View key={i} style={styles.card}>
//                   {item.icon}
//                   <Text style={styles.cardLabel}>{item.label}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ServiceAtGarageScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
  
//   },
 
//   carImage: {
//     width: "100%",
//     height: verticalScale(150),
//     alignSelf: "center",
//   },
//   sectionContainer: {
//     backgroundColor: Colors.WHITE,
//     marginTop: verticalScale(10),
//     borderTopLeftRadius: moderateScale(25),
//     borderTopRightRadius: moderateScale(25),
//     paddingHorizontal: matter.spacing.l,
//     paddingTop: verticalScale(10),
//   },
//   sectionTitle: {
//     fontSize: matter.fontSize.md,
//     fontWeight: "600",
//     color: Colors.TEXT,
//     marginBottom: verticalScale(6),
//   },
//   gridContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   card: {
//     width: "30%",
//     backgroundColor: Colors.WHITE,
//     borderRadius: matter.radius.lg,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: verticalScale(12),
//     marginBottom: verticalScale(10),
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   cardLabel: {
//     fontSize: matter.fontSize.sm,
//     color: Colors.TEXT,
//     marginTop: verticalScale(5),
//     textAlign: "center",
//   },
// });



import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Car,
  Wrench,
  Settings2,
  Disc,
  CarFront,
  Plug,
  Fan,
  Hammer,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors.utils";
import matter from "../../utils/matter.utils";
import { moderateScale, verticalScale } from "react-native-size-matters";
import MainHeader from "../../components/MainHeader";

// ✅ Small reusable card component
const ServiceCard = ({ icon, label, onPress }: any) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    {icon}
    <Text style={styles.cardLabel}>{label}</Text>
  </TouchableOpacity>
);

const ServiceAtGarageScreen = () => {
  const navigation = useNavigation<any>();

  // ✅ Header click — navigate to map screen
  const handleMapPress = () => {
    navigation.navigate("MapScreen");
  };

  // ✅ Services data with target screens
  const services = [
    {
      title: "Periodic Maintenance",
      items: [
        { icon: <Car color={Colors.PRIMARY} size={26} />, label: "Quick", screen: "QuickServiceScreen" },
        { icon: <Wrench color={Colors.PRIMARY} size={26} />, label: "Major", screen: "MajorServiceScreen" },
        { icon: <Settings2 color={Colors.PRIMARY} size={26} />, label: "Regular", screen: "RegularServiceScreen" },
      ],
    },
    {
      title: "Specialized Services",
      items: [
        { icon: <Fan color={Colors.PRIMARY} size={26} />, label: "Modification", screen: "ModificationScreen" },
        { icon: <Hammer color={Colors.PRIMARY} size={26} />, label: "Car Care", screen: "CarCareScreen" },
        { icon: <Disc color={Colors.PRIMARY} size={26} />, label: "Wheels & Tyres", screen: "WheelsTyresScreen" },
      ],
    },
    {
      title: "General Repairs",
      items: [
        { icon: <Settings2 color={Colors.PRIMARY} size={26} />, label: "Engine", screen: "EngineRepairScreen" },
        { icon: <Disc color={Colors.PRIMARY} size={26} />, label: "Brake", screen: "BrakeRepairScreen" },
        { icon: <CarFront color={Colors.PRIMARY} size={26} />, label: "Body", screen: "BodyRepairScreen" },
        { icon: <Wrench color={Colors.PRIMARY} size={26} />, label: "Gear Box", screen: "GearBoxScreen" },
        { icon: <Car color={Colors.PRIMARY} size={26} />, label: "Steering & Suspension", screen: "SteeringSuspensionScreen" },
        { icon: <Plug color={Colors.PRIMARY} size={26} />, label: "Electrical", screen: "ElectricalRepairScreen" },
        { icon: <Fan color={Colors.PRIMARY} size={26} />, label: "AC Repair", screen: "ACRepairScreen" },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
   
      <MainHeader
        title="Service At Garage"
        showBack={true}
        mapActive={true}
        showMap={true}
      onMapPress={handleMapPress}
      />

      <ScrollView showsVerticalScrollIndicator={false}>

        {services.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.gridContainer}>
              {section.items.map((item, i) => (
                <ServiceCard
                  key={i}
                  icon={item.icon}
                  label={item.label}
                  onPress={() => navigation.navigate(item.screen)}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceAtGarageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  sectionContainer: {
    backgroundColor: Colors.WHITE,
    marginTop: verticalScale(10),
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
    paddingHorizontal: matter.spacing.l,
    paddingTop: verticalScale(10),
  },
  sectionTitle: {
    fontSize: matter.fontSize.md,
    fontWeight: "600",
    color: Colors.TEXT,
    marginBottom: verticalScale(6),
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "30%",
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: verticalScale(12),
    marginBottom: verticalScale(10),
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardLabel: {
    fontSize: matter.fontSize.sm,
    color: Colors.TEXT,
    marginTop: verticalScale(5),
    textAlign: "center",
  },
});
