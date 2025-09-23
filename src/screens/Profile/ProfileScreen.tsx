
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from "react-native";
// import { Camera, Phone, Mail, Edit3, Info, HelpCircle } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import { moderateScale, scale, verticalScale } from "react-native-size-matters";
// import Colors from "../../utils/Colors.utils";
// import MainHeader from "../../components/MainHeader";
// import ScreenWrapper from "../../components/ScreenWrapper";
// import AppButton from "../../components/AppButton";
// import { useTranslation } from "react-i18next";

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const { t } = useTranslation();

//   const handleLogout = () => {
//     Alert.alert(t("logout"), t("logoutConfirm"), [
//       { text: t("cancel"), style: "cancel" },
//       { text: t("logout"), onPress: () => console.log("User logged out") },
//     ]);
//   };

//   return (
//      <ScreenWrapper
//       header={<MainHeader showBell showBack />}
//     >
//         {/* Profile Card */}
//         <View style={styles.profileCard}>
//           <View style={styles.imageContainer}>
//             <Image
//               source={{ uri: "https://i.pravatar.cc/150?img=12" }}
//               style={styles.profileImage}
//             />
//             <TouchableOpacity style={styles.cameraIcon}>
//               <Camera size={16} color={Colors.WHITE} />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.name}>James</Text>
//           <Text style={styles.role}>{t("mechanicPartner")}</Text>

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

//         {/* Options */}
//         <View style={styles.optionsCard}>
//           <TouchableOpacity
//             style={styles.optionRow}
//             onPress={() => navigation.navigate("EditProfile" as never)}
//           >
//             <Edit3 size={20} color={Colors.PRIMARY} />
//             <Text style={styles.optionText}>{t("editProfile")}</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.optionRow}>
//             <HelpCircle size={20} color={Colors.PRIMARY} />
//             <Text style={styles.optionText}>{t("helpSupport")}</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.option}>
//             <Info size={20} color={Colors.PRIMARY} />
//             <Text style={styles.optionText}>{t("aboutApp")}</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Logout Button */}
//         <AppButton title={t("logout")} onPress={handleLogout} type="primary" />
    
//     </ScreenWrapper>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
 
//   profileCard: {
//     backgroundColor: Colors.WHITE,
//     marginHorizontal: scale(16),
//     borderRadius: scale(16),
//     paddingVertical: verticalScale(20),
//     alignItems: "center",
//     shadowColor: Colors.TEXT,
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     marginTop: verticalScale(30),
//   },
//   imageContainer: {
//     position: "relative",
//   },
//   profileImage: {
//     width: scale(90),
//     height: scale(90),
//     borderRadius: scale(45),
//     borderWidth: 2,
//     borderColor: Colors.PRIMARY,
//     marginBottom: verticalScale(10),
//   },
//   cameraIcon: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     backgroundColor: Colors.PRIMARY,
//     borderRadius: scale(14),
//     padding: scale(6),
//     elevation: 3,
//   },
//   name: {
//     fontSize: moderateScale(18),
//     fontWeight: "700",
//     color: Colors.TEXT,
//   },
//   role: {
//     fontSize: moderateScale(13),
//     color: Colors.DARK_GRAY,
//     marginBottom: verticalScale(10),
//   },
//   infoContainer: {
//     width: "100%",
//     paddingHorizontal: scale(20),
//     marginTop: verticalScale(10),
//   },
//   infoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: verticalScale(10),
//   },
//   infoText: {
//     fontSize: moderateScale(13),
//     color: Colors.TEXT,
//     marginLeft: scale(8),
//   },
//   optionsCard: {
//     backgroundColor: Colors.WHITE,
//     marginHorizontal: scale(14),
//     borderRadius: scale(10),
//     marginTop: verticalScale(10),
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: scale(10),
//     elevation: 2,
//   },
//   optionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: scale(10),
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.BORDER_GREY,
//     marginBottom: verticalScale(8),
//   },
//   option: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: scale(10),
//   },
//   optionText: {
//     fontSize: moderateScale(13),
//     color: Colors.TEXT,
//     marginLeft: scale(10),
//   },
// });



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Camera, Phone, Mail, Edit3, Info, HelpCircle } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import { moderateScale, scale, verticalScale } from "react-native-size-matters";
// import Colors from "../../utils/Colors.utils";
// import MainHeader from "../../components/MainHeader";
// import ScreenWrapper from "../../components/ScreenWrapper";
// import AppButton from "../../components/AppButton";
// import { useTranslation } from "react-i18next";
// import * as Yup from "yup";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import i18n from "../../utils/i18n.utils";

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const { t } = useTranslation();
//   const [error, setError] = useState("");

//   // ✅ Yup schema for logout confirmation
//   const logoutSchema = Yup.object().shape({
//     confirm: Yup.string()
//       .required(t("logoutConfirm"))
//       .oneOf(["yes"], t("logoutValidationError")),
//   });

//   const handleLogout = async () => {
//     // try {
//     //   const values = { confirm: "yes" }; 
//     //   await logoutSchema.validate(values);
//     //   await AsyncStorage.removeItem("userToken");
//     //   navigation.reset({
//     //     index: 0,
//     //     routes: [{ name: "SignIn" as never }],
//     //   });
//     // } catch (err: any) {
//     //   setError(err.message);
//     // }
//   };

//   return (
//     <ScreenWrapper
//       header={<MainHeader title={i18n.t("Profile")} showBell showBack />}
//     >
//       <View style={styles.profileCard}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={{ uri: "https://i.pravatar.cc/150?img=12" }}
//             style={styles.profileImage}
//           />
//           <TouchableOpacity style={styles.cameraIcon}>
//             <Camera size={16} color={Colors.WHITE} />
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.name}>James</Text>
//         <Text style={styles.role}>{t("mechanicPartner")}</Text>

//         <View style={styles.infoContainer}>
//           <View style={styles.infoRow}>
//             <Mail size={20} color={Colors.PRIMARY} />
//             <Text style={styles.infoText}>james8538@email.com</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Phone size={20} color={Colors.PRIMARY} />
//             <Text style={styles.infoText}>+92 301 2345678</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.optionsCard}>
//         <TouchableOpacity
//           style={styles.optionRow}
//           onPress={() => navigation.navigate("EditProfile" as never)}
//         >
//           <Edit3 size={20} color={Colors.PRIMARY} />
//           <Text style={styles.optionText}>{t("editProfile")}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.optionRow}>
//           <HelpCircle size={20} color={Colors.PRIMARY} />
//           <Text style={styles.optionText}>{t("helpSupport")}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.option}>
//           <Info size={20} color={Colors.PRIMARY} />
//           <Text style={styles.optionText}>{t("aboutApp")}</Text>
//         </TouchableOpacity>
//       </View>


//       <AppButton title={t("logout")} onPress={handleLogout} type="primary" />
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//     </ScreenWrapper>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   profileCard: {
//     backgroundColor: Colors.WHITE,
//     marginHorizontal: scale(16),
//     borderRadius: scale(16),
//     paddingVertical: verticalScale(20),
//     alignItems: "center",
//     shadowColor: Colors.TEXT,
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     marginTop: verticalScale(25),
//   },
//   imageContainer: {
//     position: "relative",
//   },
//   profileImage: {
//     width: scale(90),
//     height: scale(90),
//     borderRadius: scale(45),
//     borderWidth: 2,
//     borderColor: Colors.PRIMARY,
//     marginBottom: verticalScale(10),
//   },
//   cameraIcon: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     backgroundColor: Colors.PRIMARY,
//     borderRadius: scale(14),
//     padding: scale(6),
//     elevation: 3,
//   },
//   name: {
//     fontSize: moderateScale(20),
//     fontWeight: "800",
//     color: Colors.TEXT,
//   },
//   role: {
//     fontSize: moderateScale(15),
//     color: Colors.DARK_GRAY,
//     marginBottom: verticalScale(10),
//   },
//   infoContainer: {
//     width: "100%",
//     paddingHorizontal: scale(20),
//     marginTop: verticalScale(10),
//   },
//   infoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: verticalScale(10),
//   },
//   infoText: {
//     fontSize: moderateScale(15),
//     color: Colors.TEXT,
//     marginLeft: scale(8),
//   },
//   optionsCard: {
//     backgroundColor: Colors.WHITE,
//     marginHorizontal: scale(14),
//     borderRadius: scale(10),
//     marginTop: verticalScale(10),
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: scale(10),
//     elevation: 2,
//     marginBottom: 15,
//   },
//   optionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: scale(10),
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.BORDER_GREY,
//     marginBottom: verticalScale(8),
//   },
//   option: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: scale(10),
//   },
//   optionText: {
//     marginLeft: scale(8),
//     fontSize: moderateScale(15),
//     color: Colors.TEXT,
//   },
//   errorText: {
//     textAlign: "center",
//     color: Colors.RED,
//     fontSize: moderateScale(12),
//     marginTop: 5,
//   },
// });

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Camera, Phone, Mail } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Colors from "../../utils/Colors.utils";
import MainHeader from "../../components/MainHeader";
import ScreenWrapper from "../../components/ScreenWrapper";
import AppButton from "../../components/AppButton";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfileOptions } from "../../DATA/ProfileData";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" as never }],
    });
  };

  const options = getProfileOptions(t, navigation);

  return (
    <ScreenWrapper header={<MainHeader title={t("Profile")} showBell showBack />}>
      <View style={styles.profileCard}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.profileImage}
          />
          <View style={styles.cameraIcon}>
            <Camera size={16} color={Colors.WHITE} />
          </View>
        </View>

        <Text style={styles.name}>James</Text>
        <Text style={styles.role}>{t("mechanicPartner")}</Text>

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

      {/* Map profile options directly here */}
      <View style={styles.optionsCard}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.optionRow,
              index === options.length - 1 && { borderBottomWidth: 0 },
            ]}
            onPress={item.onPress}
          >
            {item.icon}
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <AppButton title={t("logout")} onPress={handleLogout} type="primary" />
    </ScreenWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: scale(16),
    borderRadius: scale(16),
    paddingVertical: verticalScale(20),
    alignItems: "center",
    shadowColor: Colors.TEXT,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginTop: verticalScale(25),
  },
  imageContainer: { position: "relative" },
  profileImage: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(45),
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    marginBottom: verticalScale(10),
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Colors.PRIMARY,
    borderRadius: scale(14),
    padding: scale(6),
    elevation: 3,
  },
  name: { fontSize: moderateScale(18), fontWeight: "700", color: Colors.TEXT },
  role: { fontSize: moderateScale(13), color: Colors.DARK_GRAY, marginBottom: verticalScale(10) },
  infoContainer: { width: "100%", paddingHorizontal: scale(20), marginTop: verticalScale(10) },
  infoRow: { flexDirection: "row", alignItems: "center", marginBottom: verticalScale(10) },
  infoText: { fontSize: moderateScale(13), color: Colors.TEXT, marginLeft: scale(8) },
  optionsCard: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: scale(14),
    borderRadius: scale(10),
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    elevation: 2,
    marginBottom: 15,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
  },
  optionText: {
    fontSize: moderateScale(14),
    color: Colors.TEXT,
    marginLeft: scale(10),
  },
});
