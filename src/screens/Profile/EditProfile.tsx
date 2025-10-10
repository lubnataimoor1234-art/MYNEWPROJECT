import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import CustomHeader from "../../components/CustomHeader";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+92 300 1234567");
  const [address, setAddress] = useState("123 Main Street, Karachi");
  const [vehicleType, setVehicleType] = useState("Car");

  return (
    <View style={styles.container}>
      <CustomHeader title="Edit Profile" showBack  showProfile={false}/>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Form Fields */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter full name"
            placeholderTextColor={Colors.BORDER_GREY}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            keyboardType="email-address"
            placeholderTextColor={Colors.BORDER_GREY}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            placeholderTextColor={Colors.BORDER_GREY}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={address}
            onChangeText={setAddress}
            multiline
            placeholder="Enter address"
            placeholderTextColor={Colors.BORDER_GREY}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Vehicle Type</Text>
          <TextInput
            style={styles.input}
            value={vehicleType}
            onChangeText={setVehicleType}
            placeholder="Enter vehicle type"
            placeholderTextColor={Colors.BORDER_GREY}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
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
  formGroup: {
    marginBottom: matter.spacing.m,
  },
  label: {
    fontSize: matter.fontSize.sm,
    fontWeight: "600",
    color: Colors.TEXT,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderRadius: matter.radius.lg,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: matter.fontSize.md,
    color: Colors.TEXT,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
  },
  multilineInput: {
    minHeight: 70,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 14,
    borderRadius: matter.radius.lg,
    alignItems: "center",
    marginTop: matter.spacing.l,
    elevation: 3,
  },
  saveButtonText: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.md,
    fontWeight: "700",
  },
});
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import CustomHeader from "../../components/CustomHeader";

// const EditProfileScreen = () => {
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("johndoe@email.com");
//   const [phone, setPhone] = useState("0300-1234567");
//   const [image, setImage] = useState<string | null>(null);

//   // ✅ Pick image from gallery
//   const pickImage = async () => {
//     const permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (!permissionResult.granted) {
//       Alert.alert("Permission Required", "Camera roll access is needed!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 0.7,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   // ✅ Handle save profile
//   const handleSave = () => {
//     const updatedProfile = {
//       name,
//       email,
//       phone,
//       image,
//     };

//     // Here you can integrate with API or AsyncStorage
//     console.log("Profile Saved:", updatedProfile);
//     Alert.alert("Success", "Profile updated successfully!");
//   };

//   return (
//     <View style={styles.container}>
//       <CustomHeader title="Edit Profile" showBack />

//       {/* Profile Image */}
//       <View style={styles.imageContainer}>
//         <TouchableOpacity onPress={pickImage}>
//           {image ? (
//             <Image source={{ uri: image }} style={styles.profileImage} />
//           ) : (
//             <View style={styles.placeholderImage}>
//               <Text style={styles.placeholderText}>+</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//         <Text style={styles.changePhoto}>Change Photo</Text>
//       </View>

//       {/* Form Fields */}
//       <View style={styles.form}>
//         <Text style={styles.label}>Full Name</Text>
//         <TextInput
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//           placeholder="Enter your name"
//         />

//         <Text style={styles.label}>Email Address</Text>
//         <TextInput
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//           placeholder="Enter your email"
//           keyboardType="email-address"
//         />

//         <Text style={styles.label}>Phone Number</Text>
//         <TextInput
//           value={phone}
//           onChangeText={setPhone}
//           style={styles.input}
//           placeholder="Enter your phone"
//           keyboardType="phone-pad"
//         />
//       </View>

//       {/* Save Button */}
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.saveText}>Save Changes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default EditProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//     paddingHorizontal: matter.padding.screen,
//   },
//   imageContainer: {
//     alignItems: "center",
//     marginTop: matter.spacing.l,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: Colors.PRIMARY,
//   },
//   placeholderImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: Colors.WHITE,
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//   },
//   placeholderText: {
//     color: Colors.PRIMARY,
//     fontSize: 36,
//     fontWeight: "600",
//   },
//   changePhoto: {
//     color: Colors.PRIMARY,
//     fontSize: matter.fontSize.sm,
//     marginTop: matter.spacing.s,
//     textDecorationLine: "underline",
//   },
//   form: {
//     marginTop: matter.spacing.l,
//   },
//   label: {
//     color: Colors.TEXT,
//     fontWeight: "600",
//     marginBottom: 4,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//     borderRadius: matter.radius.md,
//     padding: 10,
//     marginBottom: matter.spacing.m,
//     color: Colors.TEXT,
//   },
//   saveButton: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: matter.padding.buttonV,
//     borderRadius: matter.radius.lg,
//     marginTop: matter.spacing.l,
//     alignItems: "center",
//   },
//   saveText: {
//     color: Colors.WHITE,
//     fontSize: matter.fontSize.md,
//     fontWeight: "600",
//   },
// });
