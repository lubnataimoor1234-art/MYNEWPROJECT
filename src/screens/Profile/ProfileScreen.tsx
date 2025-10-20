import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
//import * as ImagePicker from "expo-image-picker";
import { Camera, Phone, Mail, Edit3, Info, LogOut, HelpCircle } from "lucide-react-native";
import Colors from "../../utils/Colors.utils";
import matter from "../../utils/matter.utils";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/MainHeader";
import AppButton from "../../components/AppButton";
import strings from "../../utils/strings.utils";
const ProfileScreen = () => {
  const navigation = useNavigation();
  
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("User logged out") },
    ]);
  };

  // 📸 Pick image from gallery
  const pickImage = async () => {
  //   const permissionResult =
  //     await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!permissionResult.granted) {
  //     Alert.alert("Permission required", "Please allow gallery access!");
  //     return;
  //   }

  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [1, 1],
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setProfileImage({ uri: result.assets[0].uri });
  //   }
   };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <CustomHeader showBack={true} title="Profile" showProfile={false} />

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.imageContainer}>
            <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=12",
            }}
            style={styles.profileImage}
          />
            <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
              <Camera size={16} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>James</Text>
          <Text style={styles.role}>Mechanic Partner</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Mail size={20} color={Colors.PRIMARY} />
              <Text style={styles.infoText}>james8538@email.com</Text>
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

          <TouchableOpacity style={styles.optionRow}>
            <HelpCircle size={20} color={Colors.PRIMARY} />
            <Text style={styles.optionText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Info size={20} color={Colors.PRIMARY} />
            <Text style={styles.optionText}>About App</Text>
          </TouchableOpacity>
        </View>

        

<AppButton
          title={strings.EditProfile.Btn}
          onPress={() => navigation.navigate("SingnIn" as never)}
          type="primary"
        />
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
    paddingVertical: matter.spacing.s, 
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginTop: -30,
  },
  imageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    marginBottom: matter.spacing.s,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 14,
    padding: 6,
    elevation: 3,
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
    fontSize: matter.fontSize.sm,
    color: Colors.TEXT,
    marginLeft: matter.spacing.s,
  },
  optionsCard: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: matter.spacing.m,
    borderRadius: matter.radius.md,
    marginTop: matter.spacing.s,
    paddingVertical: matter.spacing.m,
    paddingHorizontal: matter.spacing.m,
    elevation: 2,
    
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: matter.spacing.m,
    paddingHorizontal: matter.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER_GREY,
     borderRadius: matter.radius.md,
     marginBottom:8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: matter.spacing.m,
    paddingHorizontal: matter.spacing.m,
    
  },
  optionText: {
    fontSize: matter.fontSize.sm,
    color: Colors.TEXT,
    marginLeft: matter.spacing.m,
  },
  
});


// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Alert,
// } from "react-native";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import { useNavigation } from "@react-navigation/native";
// import { User, Phone, Mail, Edit3, Info, LogOut, HelpCircle } from "lucide-react-native";
// import CustomHeader from "../../components/CustomHeader";

// const ProfileScreen = () => {
//   const navigation = useNavigation();

//   const handleLogout = () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       { text: "Logout", onPress: () => console.log("User logged out") },
//     ]);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scroll}>
//         {/* Header */}
//         <CustomHeader showBack={true} title="Profile" showProfile={false} />

//         {/* Profile Card */}
//         <View style={styles.profileCard}>
//           <Image
//             source={{
//               uri: "https://i.pravatar.cc/150?img=12",
//             }}
//             style={styles.profileImage}
//           />
//           <Text style={styles.name}>James</Text>
//           <Text style={styles.role}>Mechanic Partner</Text>

//           <View style={styles.infoContainer}>
//             <View style={styles.infoRow}>
//               <Mail size={20} color={Colors.PRIMARY} />
//               <Text style={styles.infoText}>james8538@email.com</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Phone size={20} color={Colors.PRIMARY} />
//               <Text style={styles.infoText}>+92 301 2345678</Text>
//             </View>
//           </View>
//         </View>

//         {/* Options Section */}
//         <View style={styles.optionsCard}>
//           <TouchableOpacity
//   style={styles.optionRow}
//   onPress={() => navigation.navigate("EditProfile" as never)} 
// >
//   <Edit3 size={20} color={Colors.PRIMARY} />
//   <Text style={styles.optionText}>Edit Profile</Text>
// </TouchableOpacity>

//           <TouchableOpacity style={styles.optionRow}>
//             <HelpCircle size={20} color={Colors.PRIMARY} />
//             <Text style={styles.optionText}>Help & Support</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.option}>
//             <Info size={20} color={Colors.PRIMARY} />
//             <Text style={styles.optionText}>About App</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Logout Button */}
//         <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//           <LogOut size={20} color={Colors.WHITE} />
//           <Text style={styles.logoutText}>Logout</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.BACKGROUND,
//   },
//   scroll: {
//     paddingBottom: matter.spacing.xl,
//   },
//   profileCard: {
//     backgroundColor: Colors.WHITE,
//     marginHorizontal: matter.spacing.l,
//     borderRadius: matter.radius.lg,
//     paddingVertical: matter.spacing.xl,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 4,
//     marginTop: -40,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 60,
//     borderWidth: 3,
//     borderColor: Colors.PRIMARY,
//     marginBottom: matter.spacing.m,
//   },
//   name: {
//     fontSize: matter.fontSize.lg,
//     fontWeight: "700",
//     color: Colors.TEXT,
//   },
//   role: {
//     fontSize: matter.fontSize.sm,
//     color: Colors.DARK_GRAY,
//     marginBottom: matter.spacing.m,
//   },
//   infoContainer: {
//     width: "100%",
//     paddingHorizontal: matter.spacing.l,
//     marginTop: matter.spacing.s,
//   },
//   infoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: matter.spacing.m,
//   },
//   infoText: {
//     fontSize: matter.fontSize.md,
//     color: Colors.TEXT,
//     marginLeft: matter.spacing.s,
//   },
//   optionsCard: {
//   backgroundColor: Colors.WHITE,
//   marginHorizontal: matter.spacing.m, // reduced horizontal margin
//   borderRadius: matter.radius.md,     // slightly smaller corner radius
//   marginTop: matter.spacing.s,       // less top margin
//   paddingVertical: matter.spacing.m,  // reduced vertical padding
//   paddingHorizontal: matter.spacing.m, // optional: add equal spacing inside
//   elevation: 2,                       // lighter shadow for smaller card
// },

//   // optionsCard: {
//   //   backgroundColor: Colors.WHITE,
//   //   marginHorizontal: matter.spacing.l,
//   //   borderRadius: matter.radius.lg,
//   //   marginTop: matter.spacing.s,
//   //   paddingVertical: matter.spacing.l,
//   //   elevation: 3,
//   // },
//   optionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: matter.spacing.m,
//     paddingHorizontal: matter.spacing.l,
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.BORDER_GREY,
//   },
//    option: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: matter.spacing.m,
//     paddingHorizontal: matter.spacing.l,
//   },
//   optionText: {
//     fontSize: matter.fontSize.md,
//     color: Colors.TEXT,
//     marginLeft: matter.spacing.m,
//   },
//   logoutButton: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: Colors.PRIMARY,
//     marginHorizontal: matter.spacing.l,
//     borderRadius: matter.radius.lg,
//     paddingVertical: matter.padding.buttonV,
//     marginTop: matter.spacing.xl,
//   },
//   logoutText: {
//     color: Colors.WHITE,
//     fontSize: matter.fontSize.md,
//     fontWeight: "600",
//     marginLeft: matter.spacing.s,
//   },
// });
