// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import CustomHeader from "../../components/CustomHeader";
// import AppButton from "../../components/AppButton";
// import strings from "../../utils/strings.utils";
// import InputField from '../../components/InputField';
// const EditProfileScreen = () => {
//   const navigation = useNavigation();

//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("john@example.com");
//   const [phone, setPhone] = useState("+92 300 1234567");
//   const [address, setAddress] = useState("123 Main Street, Karachi");
//   const [vehicleType, setVehicleType] = useState("Car");

//   return (
//     <View style={styles.container}>
//       <CustomHeader title="Edit Profile" showBack  showProfile={false}/>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContainer}
//       >
//         {/* Form Fields */}
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Full Name</Text>
//           <TextInput
//             style={styles.input}
//             value={name}
//             onChangeText={setName}
//             placeholder="Enter full name"
//             placeholderTextColor={Colors.BORDER_GREY}
//           />
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.input}
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Enter email"
//             keyboardType="email-address"
//             placeholderTextColor={Colors.BORDER_GREY}
//           />
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Phone Number</Text>
//           <TextInput
//             style={styles.input}
//             value={phone}
//             onChangeText={setPhone}
//             keyboardType="phone-pad"
//             placeholder="Enter phone number"
//             placeholderTextColor={Colors.BORDER_GREY}
//           />
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Address</Text>
//           <TextInput
//             style={[styles.input, styles.multilineInput]}
//             value={address}
//             onChangeText={setAddress}
//             multiline
//             placeholder="Enter address"
//             placeholderTextColor={Colors.BORDER_GREY}
//           />
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Vehicle Type</Text>
//           <TextInput
//             style={styles.input}
//             value={vehicleType}
//             onChangeText={setVehicleType}
//             placeholder="Enter vehicle type"
//             placeholderTextColor={Colors.BORDER_GREY}
//           />
//         </View>
//  <AppButton
//         title={strings.EditProfile.ProfileBtn}
//         onPress={() => navigation.navigate("MapScreen" as never)}
//         type="primary"
//       />
      
//       </ScrollView>
//     </View>
//   );
// };

// export default EditProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//   },
//   scrollContainer: {
//     padding: matter.padding.screen,
//     paddingBottom: 40,
//   },
//   formGroup: {
//     marginBottom: matter.spacing.m,
//   },
//   label: {
//     fontSize: matter.fontSize.sm,
//     fontWeight: "600",
//     color: Colors.TEXT,
//     marginBottom: 6,
//   },
//   input: {
//     backgroundColor: "#F9FAFB",
//     borderRadius: matter.radius.lg,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     fontSize: matter.fontSize.md,
//     color: Colors.TEXT,
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//   },
//   multilineInput: {
//     minHeight: 70,
//     textAlignVertical: "top",
//   },
 
// });
import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors.utils";
import matter from "../../utils/matter.utils";
import CustomHeader from "../../components/MainHeader";
import AppButton from "../../components/AppButton";
import strings from "../../utils/strings.utils";
import InputField from "../../components/InputField";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+92 300 1234567");
  const [address, setAddress] = useState("123 Main Street, Karachi");
  const [vehicleType, setVehicleType] = useState("Car");

  return (
    <View style={styles.container}>
      <CustomHeader title="Edit Profile" showBack showProfile={false} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        
        <InputField
          label="Full Name"
          placeholder="Enter full name"
          value={name}
          onChangeText={setName}
        />

        <InputField
          label="Email"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <InputField
          label="Phone Number"
          placeholder="Enter phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <InputField
          label="Address"
          placeholder="Enter address"
          value={address}
          onChangeText={setAddress}
          multiline
          style={{ minHeight: 70, textAlignVertical: "top" }}
        />

        <InputField
          label="Vehicle Type"
          placeholder="Enter vehicle type"
          value={vehicleType}
          onChangeText={setVehicleType}
        />

        {/* ✅ Save Button */}
        <AppButton
          title={strings.EditProfile.ProfileBtn}
          onPress={() => navigation.navigate("ProfileScreen" as never)}
          type="primary"
        />
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  scrollContainer: {
    padding: matter.padding.screen,
    paddingBottom: 40,
  },
});

