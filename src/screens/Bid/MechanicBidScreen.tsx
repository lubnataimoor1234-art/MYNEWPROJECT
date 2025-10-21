
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
// import CustomHeader from "../../components/CustomHeader";
// import Colors from "../../utils/colors.utils";
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

// const MechanicsBidScreen = () => {
//   const navigation = useNavigation();
//   const [activeIcons, setActiveIcons] = useState<{ [key: string]: string }>({});
//    const [search, setSearch] = useState("");
//    const [chatVisible, setChatVisible] = React.useState(false);
// const [selectedMechanic, setSelectedMechanic] = React.useState(null);
//   const handleAcceptBid = (mechanicName: string, price: number) => {
//     Alert.alert(
//       "Bid Accepted ✅",
//       `You have accepted ${mechanicName}'s bid for $${price}.`,
//       [
//         {
//           text: "OK",
//        onPress: () =>
//           navigation.navigate("BookingsScreen"as never),
           
             
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

//           <View style={styles.row}>
//             <MapPin size={14} color={Colors.TEXT} />
//             <Text style={styles.locationText}> {item.location}</Text>
//           </View>

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
            
//             onPress={() => toggleIcon(item.id, "message")}
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
//       <CustomHeader title="Mechanic Bids" 
//         showSearch 
//        onSearchChange={setSearch}
//       showProfile />
//       <View style={styles.content}>
//         <FlatList
//           data={mechanicsData}
//           renderItem={renderBidCard}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 30 }}
//         />
//       </View>
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



// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import { MessageCircle, Phone } from "lucide-react-native";

// const bidsData = [
//   {
//     id: 1,
//     mechanic: "Amit Sharma",
//     service: "Battery Issues",
//     rating: 4.8,
//     reviews: 287,
//     distance: "3.1 km",
//     time: "20 min",
//     price: 40,
//   },
//   {
//     id: 2,
//     mechanic: "Rajesh Kumar",
//     service: "Engine Breakdown",
//     rating: 4.6,
//     reviews: 190,
//     distance: "4.8 km",
//     time: "25 min",
//     price: 60,
//   },
// ];

// const BidMechanicScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {bidsData.map((item) => (
//         <View key={item.id} style={styles.card}>
//           <View style={styles.topRow}>
//             <Text style={styles.service}>{item.service}</Text>
//             <TouchableOpacity
//               style={styles.acceptButton}
//               onPress={() => navigation.navigate("BookingsScreen", { mechanic: item })}
//             >
//               <Text style={styles.acceptText}>Accept Bid</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.infoRow}>
//             <Text style={styles.location}>{item.distance} • {item.time}</Text>
//             <Text style={styles.price}>${item.price}</Text>
//           </View>

//           <View style={styles.mechanicRow}>
//             <Text style={styles.name}>{item.mechanic}</Text>
//             <Text style={styles.rating}>⭐ {item.rating} ({item.reviews})</Text>
//           </View>

//           <View style={styles.iconRow}>
//             <TouchableOpacity style={styles.iconCircle}>
//               <MessageCircle color={Colors.PRIMARY} size={20} />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconCircle}>
//               <Phone color={Colors.PRIMARY} size={20} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default BidMechanicScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//     padding: matter.padding.screen,
//   },
//   card: {
//     backgroundColor: Colors.BACKGROUND,
//     borderRadius: matter.radius.lg,
//     padding: matter.spacing.m,
//     marginBottom: matter.spacing.l,
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//   },
//   topRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: matter.spacing.s,
//   },
//   service: {
//     fontSize: matter.fontSize.md,
//     fontWeight: "700",
//     color: Colors.TEXT,
//   },
//   acceptButton: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: matter.radius.md,
//   },
//   acceptText: {
//     color: Colors.WHITE,
//     fontWeight: "600",
//   },
//   infoRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: matter.spacing.s,
//   },
//   location: {
//     color: Colors.DARK_GRAY,
//   },
//   price: {
//     fontWeight: "600",
//     color: Colors.TEXT,
//   },
//   mechanicRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   name: {
//     color: Colors.TEXT,
//     fontWeight: "500",
//   },
//   rating: {
//     color: Colors.DARK_GRAY,
//   },
//   iconRow: {
//     flexDirection: "row",
//     marginTop: matter.spacing.s,
//   },
//   iconCircle: {
//     borderWidth: 1,
//     borderColor: Colors.PRIMARY,
//     borderRadius: 30,
//     padding: 8,
//     marginRight: 12,
//   },
// });



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
// import Colors from "../../utils/colors.utils";
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

//           <View style={styles.row}>
//             <MapPin size={14} color={Colors.TEXT} />
//             <Text style={styles.locationText}> {item.location}</Text>
//           </View>

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
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   Alert,
// } from "react-native";
// import { MapPin, Star, Phone, MessageSquare } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import MainHeader from "../../components/MainHeader";
// import Colors from "../../utils/Colors.utils";
// import ChatModal from "../../components/ChatModal";
// import ScreenWrapper from "../../components/ScreenWrapper";
// import { mechanicsData } from "../../DATA/MechanicData";
// import { moderateScale, verticalScale } from "react-native-size-matters";

// const MechanicsBidScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const [activeIcons, setActiveIcons] = useState<{ [key: string]: string }>({});
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
//       {/* ===== Top Row ===== */}
//       <View style={styles.topRow}>
//         <View style={{ flex: 1 }}>
//           <Text style={styles.serviceText}>{item.service}</Text>

//           <View style={styles.row}>
//             <MapPin size={14} color={Colors.TEXT} />
//             <Text style={styles.locationText}> {item.location}</Text>
//           </View>

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

//       <View style={styles.divider} />

//       {/* ===== Bottom Row ===== */}
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

//           {/* Message Button */}
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

//           {/* Call Button */}
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
//     <ScreenWrapper
//       header={<MainHeader title="Mechanic Bids" showSearch />}
    
//     >
//       <FlatList
//         data={mechanicsData}
//         renderItem={renderBidCard}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 30 }}
//       />

//       {/* Chat Modal */}
//       <ChatModal
//         visible={chatVisible}
//         onClose={() => setChatVisible(false)}
//         mechanic={selectedMechanic}
//       />
//     </ScreenWrapper>
//   );
// };

// export default MechanicsBidScreen;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: moderateScale(20),
//     padding: moderateScale(16),
//     marginBottom: verticalScale(15),
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
//     fontSize: moderateScale(16),
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginBottom: verticalScale(4),
//   },
//   row: { flexDirection: "row", alignItems: "center", marginTop: 2 },
//   locationText: {
//     fontSize: moderateScale(12),
//     color: Colors.DARK_GRAY,
//   },
//   ratingText: {
//     fontSize: moderateScale(12),
//     color: Colors.TEXT,
//   },
//   acceptBtn: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: verticalScale(8),
//     paddingHorizontal: moderateScale(16),
//     borderRadius: moderateScale(10),
//   },
//   acceptText: {
//     color: Colors.WHITE,
//     fontWeight: "700",
//     fontSize: moderateScale(13),
//   },
//   divider: {
//     height: 1,
//     backgroundColor: Colors.BORDER_GREY,
//     marginVertical: verticalScale(10),
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
//   avatar: {
//     width: moderateScale(45),
//     height: moderateScale(45),
//     borderRadius: moderateScale(10),
//     marginRight: moderateScale(10),
//   },
//   mechanicName: {
//     fontSize: moderateScale(14),
//     fontWeight: "700",
//     color: Colors.TEXT,
//   },
//   status: {
//     fontSize: moderateScale(12),
//     fontWeight: "500",
//     marginTop: verticalScale(2),
//   },
//   priceText: {
//     fontSize: moderateScale(18),
//     fontWeight: "700",
//     color: Colors.TEXT,
//     marginRight: moderateScale(8),
//   },
//   iconBtn: {
//     marginLeft: moderateScale(8),
//     backgroundColor: Colors.BORDER_GREY,
//     padding: moderateScale(8),
//     borderRadius: 50,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../../components/ScreenWrapper";
import MainHeader from "../../components/MainHeader";

import MechanicCard from "../../components/MechanicCard";
import { mechanicsData } from "../../DATA/MechanicData";
import ChatModal from "../../components/ChatModal";

const MechanicsBidScreen: React.FC = () => {
  const navigation = useNavigation();
  const [chatVisible, setChatVisible] = useState(false);
  const [selectedMechanic, setSelectedMechanic] = useState<any>(null);
  const [detailVisible, setDetailVisible] = useState(false);

  const handleOpenChat = (mechanic: any) => {
    setSelectedMechanic(mechanic);
    setChatVisible(true);
  };

  const handleOpenDetails = (mechanic: any) => {
    setSelectedMechanic(mechanic);
    setDetailVisible(true);
  };

  const handleAcceptBid = (mechanicName: string, price: number) => {
    (`You accepted ${mechanicName}'s bid for $${price}`);
    navigation.navigate("BookingsScreen" as never);
  };

  return (
    <ScreenWrapper header={<MainHeader title="Mechanic Bids" />}>
      <FlatList
        data={mechanicsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MechanicCard
            mechanic={item}
            onChat={() => handleOpenChat(item)}
            onDetails={() => handleOpenDetails(item)}
            onAccept={() => handleAcceptBid(item.name, item.price)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Chat Modal */}
      <ChatModal
        visible={chatVisible}
        onClose={() => setChatVisible(false)}
        mechanic={selectedMechanic}
      />

      {/* Mechanic Details Modal */}
      <ChatModal
        visible={detailVisible}
        onClose={() => setDetailVisible(false)}
        mechanic={selectedMechanic}
      />
    </ScreenWrapper>
  );
};

export default MechanicsBidScreen;

