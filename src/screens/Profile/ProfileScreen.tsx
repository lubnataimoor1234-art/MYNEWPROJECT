
// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Colors from "../../utils/colors.utils";
// import { ChevronRight } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";

// const ProfileScreen = () => {
//   const navigation = useNavigation();

//   const menuItems = [
//     { title: "Personal Information", screen: "PersonalInfoScreen" },
//     { title: "Payment Methods", screen: "PaymentMethodsScreen" },
//     { title: "Saved Locations", screen: "SavedLocationsScreen" },
//     { title: "My Vehicles", screen: "MyVehiclesScreen" },
//     { title: "Help & Support", screen: "HelpSupportScreen" },
//     { title: "Settings", screen: "SettingsScreen" },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Profile</Text>
//         <View style={styles.headerRow}>
//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>JD</Text>
//           </View>
//           <View>
//             <Text style={styles.name}>John Doe</Text>
//             <Text style={styles.phone}>+1 234 567 8900</Text>
//           </View>
//         </View>
//       </View>

//       {/* Menu Items */}
//       <View style={styles.menu}>
//         {menuItems.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.menuItem,
//               index === menuItems.length - 1 && { borderBottomWidth: 0 },
//             ]}
//             onPress={() => navigation.navigate(item.screen as never)}
//           >
//             <Text style={styles.menuText}>{item.title}</Text>
//             <ChevronRight color={Colors.DARK_GRAY} size={20} />
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.BACKGROUND,
//   },
//   header: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: 90,
//     paddingHorizontal: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   headerTitle: {
//     color: Colors.WHITE,
//     fontSize: 22,
//     fontWeight: "600",
//     marginBottom: 20,
//   },
//   headerRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   avatar: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: Colors.WHITE,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   avatarText: {
//     color: Colors.PRIMARY,
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   name: {
//     color: Colors.WHITE,
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   phone: {
//     color: Colors.WHITE,
//     fontSize: 14,
//     marginTop: 3,
//   },
//   menu: {
//     marginTop: 25,
//     backgroundColor: Colors.WHITE,
//     borderRadius: 15,
//     marginHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 18,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.BORDER_GREY, // proper grey border
//   },
//   menuText: {
//     fontSize: 16,
//     color: Colors.TEXT,
//   },
// });
// // import React, { useEffect, useState } from "react";
// // import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import { useNavigation } from "@react-navigation/native";
// // import { ChevronRight } from "lucide-react-native";
// // import Colors from "../../utils/colors.utils";
// // import matter from "../../utils/matter.utils";
// // import strings from "../../utils/strings.utils";
// // import CustomHeader from "../../components/CustomHeader";

// // const ProfileScreen = () => {
// //   const navigation = useNavigation();
// //   const [user, setUser] = useState<{ name: string; phone: string; email: string } | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const loadUser = async () => {
// //       try {
// //         const data = await AsyncStorage.getItem("userData");
// //         if (data) setUser(JSON.parse(data));
// //       } catch (err) {
// //         console.log("Error loading user data:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     loadUser();
// //   }, []);

// //   const menuItems = [
// //     { title: strings.profile.personalInfo, screen: "PersonalInfoScreen" },
// //     { title: strings.profile.paymentMethods, screen: "PaymentMethodsScreen" },
// //     { title: strings.profile.savedLocations, screen: "SavedLocationsScreen" },
// //     { title: strings.profile.myVehicles, screen: "MyVehiclesScreen" },
// //     { title: strings.profile.helpSupport, screen: "HelpSupportScreen" },
// //     { title: strings.profile.settings, screen: "SettingsScreen" },
// //   ];

// //   if (loading) {
// //     return (
// //       <View style={styles.loaderContainer}>
// //         <ActivityIndicator color={Colors.PRIMARY} size="large" />
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <CustomHeader  showProfile={false} />

// //       {/* User Info */}
// //       <View style={styles.userCard}>
// //         <View style={styles.avatar}>
// //           <Text style={styles.avatarText}>
// //             {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
// //           </Text>
// //         </View>
// //         <View>
// //           <Text style={styles.name}>{user?.name || "Guest User"}</Text>
// //           <Text style={styles.phone}>{user?.phone || "No phone available"}</Text>
// //         </View>
// //       </View>

// //       {/* Menu Items */}
// //       <View style={styles.menu}>
// //         {menuItems.map((item, index) => (
// //           <TouchableOpacity
// //             key={index}
// //             style={[
// //               styles.menuItem,
// //               index === menuItems.length - 1 && { borderBottomWidth: 0 },
// //             ]}
// //             onPress={() => navigation.navigate(item.screen as never)}
// //           >
// //             <Text style={styles.menuText}>{item.title}</Text>
// //             <ChevronRight color={Colors.DARK_GRAY} size={20} />
// //           </TouchableOpacity>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // };

// // export default ProfileScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: Colors.BACKGROUND,
// //   },
// //   loaderContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   userCard: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: Colors.WHITE,
// //     borderRadius: matter.radius.lg,
// //     padding: matter.spacing.m,
// //     margin: matter.spacing.m,
// //     elevation: 2,
// //   },
// //   avatar: {
// //     width: 70,
// //     height: 70,
// //     borderRadius: 35,
// //     backgroundColor: Colors.PRIMARY,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginRight: matter.spacing.m,
// //   },
// //   avatarText: {
// //     color: Colors.WHITE,
// //     fontSize: matter.fontSize.lg,
// //     fontWeight: "bold",
// //   },
// //   name: {
// //     fontSize: matter.fontSize.md + 2,
// //     color: Colors.TEXT,
// //     fontWeight: "600",
// //   },
// //   phone: {
// //     color: Colors.DARK_GRAY,
// //     fontSize: matter.fontSize.sm,
// //     marginTop: 3,
// //   },
// //   menu: {
// //     marginTop: matter.spacing.l,
// //     backgroundColor: Colors.WHITE,
// //     borderRadius: matter.radius.lg,
// //     marginHorizontal: matter.spacing.m,
// //   },
// //   menuItem: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     paddingVertical: matter.spacing.m + 2,
// //     paddingHorizontal: matter.spacing.l,
// //     borderBottomWidth: 1,
// //     borderBottomColor: Colors.BORDER_GREY,
// //   },
// //   menuText: {
// //     fontSize: matter.fontSize.md,
// //     color: Colors.TEXT,
// //   },
// // });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import { useNavigation } from "@react-navigation/native";
import { User, Phone, Mail, Edit3, Info, LogOut, HelpCircle } from "lucide-react-native";
import CustomHeader from "../../components/CustomHeader";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("User logged out") },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <CustomHeader showBack={true} title="Profile" showProfile={false} />

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=12",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>James</Text>
          <Text style={styles.role}>Mechanic Partner</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Mail size={20} color={Colors.PRIMARY} />
              <Text style={styles.infoText}>gulamnabi@email.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Phone size={20} color={Colors.PRIMARY} />
              <Text style={styles.infoText}>+92 301 2345678</Text>
            </View>
          </View>
        </View>

        {/* Options Section */}
        <View style={styles.optionsCard}>
          <TouchableOpacity
  style={styles.optionRow}
  onPress={() => navigation.navigate("EditProfile" as never)} 
>
  <Edit3 size={20} color={Colors.PRIMARY} />
  <Text style={styles.optionText}>Edit Profile</Text>
</TouchableOpacity>

          {/* <TouchableOpacity style={styles.optionRow}>
            <Edit3 size={20} color={Colors.PRIMARY} />
            <Text style={styles.optionText}>Edit Profile</Text>
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.optionRow}>
            <HelpCircle size={20} color={Colors.PRIMARY} />
            <Text style={styles.optionText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionRow}>
            <Info size={20} color={Colors.PRIMARY} />
            <Text style={styles.optionText}>About App</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={20} color={Colors.WHITE} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  scroll: {
    paddingBottom: matter.spacing.xl,
  },
  profileCard: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: matter.spacing.l,
    borderRadius: matter.radius.lg,
    paddingVertical: matter.spacing.xl,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginTop: -40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: Colors.PRIMARY,
    marginBottom: matter.spacing.m,
  },
  name: {
    fontSize: matter.fontSize.lg,
    fontWeight: "700",
    color: Colors.TEXT,
  },
  role: {
    fontSize: matter.fontSize.sm,
    color: Colors.DARK_GRAY,
    marginBottom: matter.spacing.m,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: matter.spacing.l,
    marginTop: matter.spacing.s,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: matter.spacing.m,
  },
  infoText: {
    fontSize: matter.fontSize.md,
    color: Colors.TEXT,
    marginLeft: matter.spacing.s,
  },
  optionsCard: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: matter.spacing.l,
    borderRadius: matter.radius.lg,
    marginTop: matter.spacing.l,
    paddingVertical: matter.spacing.m,
    elevation: 3,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: matter.spacing.m,
    paddingHorizontal: matter.spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER_GREY,
  },
  optionText: {
    fontSize: matter.fontSize.md,
    color: Colors.TEXT,
    marginLeft: matter.spacing.m,
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    marginHorizontal: matter.spacing.l,
    borderRadius: matter.radius.lg,
    paddingVertical: matter.padding.buttonV,
    marginTop: matter.spacing.xl,
  },
  logoutText: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.md,
    fontWeight: "600",
    marginLeft: matter.spacing.s,
  },
});
