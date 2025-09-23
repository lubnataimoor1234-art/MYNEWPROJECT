
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   Alert,
// } from "react-native";
// import { MapPin, Star, Phone, MessageSquare } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import CustomHeader from "../../components/MainHeader";
// import Colors from "../../utils/Colors.utils";
// import matter from "../../utils/matter.utils";
// import ChatModal from "../../components/ChatModal";

// const mechanicsData = [
//   {
//     id: "1",
//     service: "Bike Puncture Service",
//     location: "Downtown Workshop",
//     rating: 4.9,
//     name: "Alex Johnson",
//     price: 35,
//     image: "https://randomuser.me/api/portraits/men/33.jpg",
//     online: true,
//   },
//   {
//     id: "2",
//     service: "Bike Repair Services",
//     location: "City Garage",
//     rating: 4.7,
//     name: "Michael Lee",
//     price: 40,
//     image: "https://randomuser.me/api/portraits/men/21.jpg",
//     online: false,
//   },
//   {
//     id: "3",
//     service: "Car Repair Services",
//     location: "Street Mechanic Center",
//     rating: 4.8,
//     name: "David Smith",
//     price: 45,
//     image: "https://randomuser.me/api/portraits/men/46.jpg",
//     online: true,
//   },
//   {
//     id: "4",
//     service: "Door Step Services",
//     location: "Street Mechanic Center",
//     rating: 4.8,
//     name: "Leo Smith",
//     price: 100,
//     image: "https://randomuser.me/api/portraits/men/46.jpg",
//     online: true,
//   },
// ];

// const MechanicsBidScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const [activeIcons, setActiveIcons] = useState<{ [key: string]: string }>({});
//   const [search, setSearch] = useState("");
//   const [chatVisible, setChatVisible] = useState(false);
//   const [selectedMechanic, setSelectedMechanic] = useState<any>(null);

//   const handleAcceptBid = (mechanicName: string, price: number) => {
//     Alert.alert(
//       "Bid Accepted ✅",
//       `You have accepted ${mechanicName}'s bid for $${price}.`,
//       [
//         {
//           text: "OK",
//           onPress: () => navigation.navigate("BookingsScreen" as never),
//         },
//       ]
//     );
//   };

//   const toggleIcon = (mechanicId: string, type: "message" | "call") => {
//     setActiveIcons((prev) => {
//       const key = `${mechanicId}-${type}`;
//       return {
//         ...prev,
//         [key]: prev[key] === "active" ? "" : "active",
//       };
//     });
//   };

//   const renderBidCard = ({ item }: any) => (
//     <View style={styles.card}>
//       {/* Row 1: Service Info + Accept Bid */}
//       <View style={styles.topRow}>
//         <View style={{ flex: 1 }}>
//           <Text style={styles.serviceText}>{item.service}</Text>

          // <View style={styles.row}>
          //   <MapPin size={14} color={Colors.TEXT} />
          //   <Text style={styles.locationText}> {item.location}</Text>
          // </View>

//           <View style={styles.row}>
//             <Star size={14} color={Colors.PRIMARY} />
//             <Text style={styles.ratingText}> {item.rating} Rating</Text>
//           </View>
//         </View>

//         <TouchableOpacity
//           style={styles.acceptBtn}
//           onPress={() => handleAcceptBid(item.name, item.price)}
//         >
//           <Text style={styles.acceptText}>Accept Bid</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Divider */}
//       <View style={styles.divider} />

//       {/* Row 2: Mechanic Info + Actions */}
//       <View style={styles.bottomRow}>
//         <View style={styles.mechanicInfo}>
//           <Image source={{ uri: item.image }} style={styles.avatar} />
//           <View>
//             <Text style={styles.mechanicName}>{item.name}</Text>
//             <Text
//               style={[
//                 styles.status,
//                 { color: item.online ? Colors.YELLOW : Colors.DARK_GRAY },
//               ]}
//             >
//               {item.online ? "Online" : "Offline"}
//             </Text>
//           </View>
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.priceText}>${item.price}</Text>

//           {/* Message Icon */}
//           <TouchableOpacity
//             style={[
//               styles.iconBtn,
//               activeIcons[`${item.id}-message`] === "active" && {
//                 backgroundColor: Colors.PRIMARY,
//               },
//             ]}
//             onPress={() => {
//               toggleIcon(item.id, "message");
//               setSelectedMechanic(item);
//               setChatVisible(true);
//             }}
//           >
//             <MessageSquare
//               size={18}
//               color={
//                 activeIcons[`${item.id}-message`] === "active"
//                   ? Colors.WHITE
//                   : Colors.PRIMARY
//               }
//             />
//           </TouchableOpacity>

//           {/* Call Icon */}
//           <TouchableOpacity
//             style={[
//               styles.iconBtn,
//               activeIcons[`${item.id}-call`] === "active" && {
//                 backgroundColor: Colors.PRIMARY,
//               },
//             ]}
//             onPress={() => toggleIcon(item.id, "call")}
//           >
//             <Phone
//               size={18}
//               color={
//                 activeIcons[`${item.id}-call`] === "active"
//                   ? Colors.WHITE
//                   : Colors.PRIMARY
//               }
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <CustomHeader
//         title="Mechanic Bids"
//         showSearch
//          onSearchChange={setSearch}
        
//       />
//       <View style={styles.content}>
//         <FlatList
//           data={mechanicsData}
//           renderItem={renderBidCard}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 30 }}
//         />
//       </View>

//       {/* Chat Modal */}
//       <ChatModal
//         visible={chatVisible}
//         onClose={() => setChatVisible(false)}
//         mechanic={selectedMechanic}
//       />
//     </View>
//   );
// };

// export default MechanicsBidScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.BACKGROUND,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: matter.spacing.m,
//     marginTop: 10,
//   },
//   card: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: 20,
//     padding: 16,
//     marginBottom: 15,
//     elevation: 4,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//   },
//   topRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//   },
//   serviceText: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginBottom: 4,
//   },
//   row: { flexDirection: "row", alignItems: "center", marginTop: 2 },
//   locationText: {
//     fontSize: 12,
//     color: Colors.DARK_GRAY,
//   },
//   ratingText: {
//     fontSize: 12,
//     color: Colors.TEXT,
//   },
//   acceptBtn: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 12,
//     alignSelf: "flex-end",
//   },
//   acceptText: {
//     color: Colors.WHITE,
//     fontWeight: "700",
//     fontSize: 13,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: Colors.BORDER_GREY,
//     marginVertical: 10,
//   },
//   bottomRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   mechanicInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   avatar: { width: 45, height: 45, borderRadius: 10, marginRight: 10 },
//   mechanicName: { fontSize: 14, fontWeight: "700", color: Colors.TEXT },
//   status: { fontSize: 12, fontWeight: "500", marginTop: 2 },
//   priceText: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginRight: 8,
//   },
//   iconBtn: {
//     marginLeft: 8,
//     backgroundColor: Colors.BORDER_GREY,
//     padding: 10,
//     borderRadius: 50,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });




// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,

// } from "react-native";
// import { moderateScale, verticalScale } from "react-native-size-matters";
// import { useTranslation } from "react-i18next";
// import ScreenWrapper from "../../components/ScreenWrapper";
// import MainHeader from "../../components/MainHeader";
// import Colors from "../../utils/Colors.utils";
// import mechanics from "../../DATA/MechanicData";
// import { MapPin } from "lucide-react-native";

// const MechanicBidScreen = () => {
//   const { t } = useTranslation();
//   const [search, setSearch] = useState("");

//   const handleAcceptBid = (mechanic: { name: string; price: number }) => {
//     Alert.alert(
//       t("bidAcceptedTitle"),
//       t("bidAcceptedMessage", {
//         mechanicName: mechanic.name,
//         price: mechanic.price,
//       }),
//       [{ text: t("ok") }]
//     );
//   };

//   const filteredMechanics = mechanics.filter((m) =>
//     m.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <ScreenWrapper
//       header={<MainHeader title={t("mechanicBids")} showBell  />}
//     >
    
//       <FlatList
//         data={filteredMechanics}
//         keyExtractor={(item) => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <View style={styles.row}>
//               <View style={styles.leftRow}>
//                 <Image source={{ uri: item.image }} style={styles.image} />
//                 <View>
//               <Text style={[
//                       styles.status,
//                       { color: item.online ? Colors.YELLOW : Colors.BORDER_GREY,
//                       },
//                     ]}
//                   >
//                     {item.online ? t("online") : t("offline")}
//                   </Text>
//                   <Text style={styles.name}>{item.name}</Text>
//                   <Text style={styles.service}>{t(item.service)}</Text>
//                     <View style={styles.row}>
//             <MapPin size={14} color={Colors.TEXT} />
//             <Text style={styles.location}> {item.location}</Text>
//           </View> 
//           <Text style={styles.rating}> ⭐ {t("rating")}: {item.rating} </Text>
        
//                 </View>
//               </View>

//         <View style={styles.rightSection}>
//           <Text style={styles.price}>${item.price}</Text>
//           <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => handleAcceptBid(item)}
//                 >
//                   <Text style={styles.buttonText}>{t("acceptBid")}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </ScreenWrapper>
//   );
// };

// export default MechanicBidScreen;

// const styles = StyleSheet.create({

//   card: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: moderateScale(12),
//     padding: moderateScale(12),
//     marginHorizontal: moderateScale(10),
//     marginBottom: verticalScale(10),
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     marginTop: 20, 
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   leftRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   image: {
//     width: moderateScale(55),
//     height: moderateScale(55),
//     borderRadius: moderateScale(30),
//     marginRight: moderateScale(10),
//   },
//   name: {
//     fontSize: moderateScale(15),
//     fontWeight: "bold",
//     color: Colors.TEXT,
//   },
//   service: {
//     fontSize: moderateScale(12),
//     color: Colors.DARK_GRAY,
//     marginTop: verticalScale(2),
//   }, 
//    location: {
//     fontSize: moderateScale(12),
//     color: Colors.BORDER_GREY,
//     marginTop: verticalScale(2),
//   },

//   rating: {
//     fontSize: moderateScale(12),
//     color: Colors.PRIMARY,
//     marginTop: verticalScale(2),
//   },
//   status: {
//     shadowColor: Colors.DARK_GRAY,
//     fontSize: moderateScale(12),
//     marginTop: verticalScale(2),
//   },
//   rightSection: {
//     alignItems: "flex-end",
//     justifyContent: "space-between",
//   },
//   price: {
//     fontSize: moderateScale(14),
//     fontWeight: "600",
//     color: Colors.PRIMARY,
//     marginBottom: verticalScale(8),
//   },
//   button: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: verticalScale(5),
//     paddingHorizontal: moderateScale(14),
//     borderRadius: moderateScale(8),
//   },
//   buttonText: {
//     color: Colors.WHITE,
//     fontSize: moderateScale(12),
//     fontWeight: "600",
//   },
// });

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from "react-native";
// import { moderateScale, verticalScale } from "react-native-size-matters";
// import { useTranslation } from "react-i18next";
// import ScreenWrapper from "../../components/ScreenWrapper";
// import MainHeader from "../../components/MainHeader";
// import Colors from "../../utils/Colors.utils";
// import mechanics from "../../DATA/MechanicData";
// import { MapPin } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// const MechanicBidScreen = () => {
//   const { t } = useTranslation();
//   const [search, setSearch] = useState("");
//   const navigation = useNavigation<any>();

//   const handleAcceptBid = (mechanic: { name: string; price: number}) => {
//     Alert.alert(
//       t("bidAcceptedTitle"),
//       t("bidAcceptedMessage", {
//         mechanicName: mechanic.name,
//         price: mechanic.price, 
//       }),
//       [
//         {
//           text: t("ok"),
//           onPress: () =>
//             navigation.navigate("BookingScreen", {
//               mechanicName: mechanic.name,
//               price: mechanic.price,
//             }),
//         },
//       ]
//     );
//   };
 
//   const filteredMechanics = mechanics.filter((m) =>
//     m.name.toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <ScreenWrapper
//       header={<MainHeader title={t("mechanicBids")} showBell />} >
//       <FlatList
//         data={filteredMechanics}
//         keyExtractor={(item) => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <View style={styles.row}>
//               <View style={styles.leftRow}>
//                 <Image source={{ uri: item.image }} style={styles.image} />
//                 <View>
//                   <Text style={[ styles.status,
//                       {
//                         color: item.online
//                           ? Colors.YELLOW
//                           : Colors.BORDER_GREY,
//                       },
//                     ]}
//                   >
//                     {item.online ? t("online") : t("offline")}
//                   </Text>

//                   <Text style={styles.name}>{item.name}</Text>
//                   <Text style={styles.service}>{t(item.service)}</Text>

//                    {/* <View style={styles.row}>
//                     <MapPin size={14} color={Colors.TEXT} />
//                     <Text style={styles.location}> {item.location}</Text>
//                   </View>  */}

//                   <Text style={styles.rating}>
//                     ⭐ {t("rating")}: {item.rating}
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.rightSection}>
//                 <Text style={styles.price}>${item.price}</Text>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => handleAcceptBid(item)}
//                 >
//                   <Text style={styles.buttonText}>{t("acceptBid")}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </ScreenWrapper>
//   );
// };

// export default MechanicBidScreen;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: moderateScale(12),
//     padding: moderateScale(12),
//     marginHorizontal: moderateScale(10),
//     marginBottom: verticalScale(10),
//     shadowColor: Colors.TEXT,
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     marginTop: 20,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   leftRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   image: {
//     width: moderateScale(55),
//     height: moderateScale(55),
//     borderRadius: moderateScale(30),
//     marginRight: moderateScale(10),
//   },
//   name: {
//     fontSize: moderateScale(15),
//     fontWeight: "bold",
//     color: Colors.TEXT,
//   },
//   service: {
//     fontSize: moderateScale(12),
//     color: Colors.DARK_GRAY,
//     marginTop: verticalScale(2),
//   },
//   location: {
//     fontSize: moderateScale(12),
//     color: Colors.BORDER_GREY,
//     marginTop: verticalScale(2),
//   },
//   rating: {
//     fontSize: moderateScale(12),
//     color: Colors.PRIMARY,
//     marginTop: verticalScale(2),
//   },
//   status: {
//     shadowColor: Colors.DARK_GRAY,
//     fontSize: moderateScale(12),
//     marginTop: verticalScale(2),
//   },
//   rightSection: {
//     alignItems: "flex-end",
//     justifyContent: "space-between",
//   },
//   price: {
//     fontSize: moderateScale(14),
//     fontWeight: "600",
//     color: Colors.PRIMARY,
//     marginBottom: verticalScale(8),
//   },
//   button: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: verticalScale(5),
//     paddingHorizontal: moderateScale(14),
//     borderRadius: moderateScale(8),
//   },
//   buttonText: {
//     color: Colors.WHITE,
//     fontSize: moderateScale(12),
//     fontWeight: "600",
//   },
// });



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   Alert,
// } from "react-native";
// import { moderateScale, verticalScale } from "react-native-size-matters";
// import { useTranslation } from "react-i18next";
// import ScreenWrapper from "../../components/ScreenWrapper";
// import MainHeader from "../../components/MainHeader";
// import Colors from "../../utils/Colors.utils";
// import mechanics from "../../DATA/MechanicData";
// import { MapPin } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import AppButton from "../../components/AppButton";

// const MechanicBidScreen = () => {
//   const { t } = useTranslation();
//   const [search, setSearch] = useState("");
//   const navigation = useNavigation<any>();

//   const handleAcceptBid = (mechanic: {
//     name: string;
//     price: number;
//     rating: number;
//     service: string;
//   }) => {
//     Alert.alert(
//       t("bidAcceptedTitle"),
//       t("bidAcceptedMessage", {
//         mechanicName: mechanic.name,
//         price: mechanic.price,
//       }),
//       [
//         {
//           text: t("ok"),
//           onPress: () =>
//             navigation.navigate("BookingScreen", {
//               mechanicName: mechanic.name,
//               price: mechanic.price,
//               rating: mechanic.rating,
//               service: mechanic.service,
//             }),
//         },
//       ]
//     );
//   };

//   const filteredMechanics = mechanics.filter((m) =>
//     m.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <ScreenWrapper header={<MainHeader title={t("mechanicBids")} showBell />}>
//       <FlatList
//         data={filteredMechanics}
//         keyExtractor={(item) => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <View style={styles.row}>
              
//               <View style={styles.leftRow}>
//                 <Image source={{ uri: item.image }} style={styles.image} />
//                 <View>
//                   <Text
//                     style={[
//                       styles.status,
//                       {
//                         color: item.online
//                           ? Colors.YELLOW
//                           : Colors.BORDER_GREY,
//                       },
//                     ]}
//                   >
//                     {item.online ? t("online") : t("offline")}
//                   </Text>

//                   <Text style={styles.name}>{item.name}</Text>
//                   <Text style={styles.service}>{t(item.service)}</Text>

//                   <View style={styles.locationRow}>
//                     <MapPin size={14} color={Colors.TEXT} />
//                     <Text style={styles.location}>{item.location}</Text>
//                   </View>

//                   <Text style={styles.rating}>
//                     ⭐ {t("rating")}: {item.rating}
//                   </Text>
//                 </View>
//               </View>
//               <View style={styles.rightSection}>
//                 <Text style={styles.price}>${item.price}</Text>

//                 <AppButton
//                   title={t("acceptBid")}
//                   onPress={() => handleAcceptBid(item)}
//                   style={styles.appButton}
                 
//                 />
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </ScreenWrapper>
//   );
// };
import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import ScreenWrapper from "../../components/ScreenWrapper";
import MainHeader from "../../components/MainHeader";
import AppButton from "../../components/AppButton";
import Colors from "../../utils/Colors.utils";
import mechanics from "../../DATA/MechanicData";
import { MapPin } from "lucide-react-native";
//import API from "../../utils/ApiConfig";

const mechanicSchema = Yup.object().shape({
  id: Yup.string().required(),
  name: Yup.string().required(),
  price: Yup.number().required().positive(),
  rating: Yup.number().required(),
  service: Yup.string().required(),
  online: Yup.boolean().required(),
});

const MechanicBidScreen = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const navigation = useNavigation<any>();

  const filteredMechanics = mechanics.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAcceptBid = async (mechanic: any) => {
    try {
      await mechanicSchema.validate(mechanic);
      navigation.navigate("BookingScreen", {
        mechanicName: mechanic.name,
        price: mechanic.price,
        rating: mechanic.rating,
        service: mechanic.service,
        id: mechanic.id,
      });
    } catch (error) {
      console.warn("Invalid mechanic data:", error);
      // show toast/snackbar instead of Alert if you want
    }
  };

  return (
    <ScreenWrapper header={<MainHeader title={t("mechanicBids")} showBell />}>
      <FlatList
        data={filteredMechanics}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.leftRow}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View>
                <Text style={[styles.status, { color: item.online ? Colors.YELLOW : Colors.BORDER_GREY }]}>
                  {item.online ? t("online") : t("offline")}
                </Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.service}>{t(item.service)}</Text>
                <View style={styles.locationRow}>
                  <MapPin size={14} color={Colors.TEXT} />
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <Text style={styles.rating}>⭐ {t("rating")}: {item.rating}</Text>
              </View>
            </View>

            <View style={styles.rightSection}>
              <Text style={styles.price}>${item.price}</Text>
              <AppButton title={t("acceptBid")} onPress={() => handleAcceptBid(item)} />
            </View>
          </View>
        )}
      />
    </ScreenWrapper>
  );
};
export default MechanicBidScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    shadowColor: Colors.TEXT,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: moderateScale(30),
    marginRight: moderateScale(10),
  },
  name: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: Colors.TEXT,
  },
  service: {
    fontSize: moderateScale(12),
    color: Colors.TEXT,
    marginTop: verticalScale(2),
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(3),
  },
  location: {
    fontSize: moderateScale(12),
    color: Colors.DARK_GRAY,
    marginLeft: moderateScale(4),
  },
  rating: {
    fontSize: moderateScale(12),
    color: Colors.PRIMARY,
    marginTop: verticalScale(2),
  },
  status: {
    shadowColor: Colors.DARK_GRAY,
    fontSize: moderateScale(12),
    marginTop: verticalScale(2),
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  price: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: Colors.PRIMARY,
    marginBottom: verticalScale(8),
  },
  appButton: {
    paddingVertical: verticalScale(5),
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(8),
  },
  appButtonText: {
    fontSize: moderateScale(12),
  },
});
