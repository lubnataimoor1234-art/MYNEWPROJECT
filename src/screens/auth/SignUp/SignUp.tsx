// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// import Colors from '../../../utils/Colors.utils';
// import InputField from '../../../components/InputField';
// import ScreenWrapper from '../../../components/ScreenWrapper';
// import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
// import { moderateScale, verticalScale } from 'react-native-size-matters';
// import { useNavigation } from '@react-navigation/native';
// const SignUp = () => {
//   const navigation = useNavigation<any>();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   const handleSignup = () => {
//     navigation.navigate('SignIn');
//   }

//   return (
//     <ScreenWrapper contentStyle={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <ArrowLeft size={moderateScale(22)} color={Colors.TEXT} />
//         </TouchableOpacity>
//         <Text style={styles.helpText}>Help</Text>
//       </View>

//       <Text style={styles.title}>Sign up</Text>
//       <Text style={styles.subTitle}>Fill out the form to continue sign up...</Text>

//       <InputField
//         label="Name"
//         placeholder="i.e, Johns Adam"
//         value={name}
//         onChangeText={setName}
//       />

//       <InputField
//         label="Email"
//         placeholder="i.e, abc@gmail.com"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

//       <InputField
//         label="Phone Number"
//         placeholder="123-456-789"
//         value={phone}
//         onChangeText={setPhone}
//         keyboardType="phone-pad"
//         rightIcon={<Text style={styles.countryCode}>+1</Text>}
//       />

//       <InputField
//         label="Password"
//         placeholder="Enter Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={!passwordVisible}
//         rightIcon={
//           passwordVisible ? (
//             <Eye size={moderateScale(20)} color={Colors.DARK_GRAY} />
//           ) : (
//             <EyeOff size={moderateScale(20)} color={Colors.DARK_GRAY} />
//           )
//         }
//         onRightIconPress={() => setPasswordVisible(!passwordVisible)}
//       />

//       <InputField
//         label="Confirm Password"
//         placeholder="Re-enter Password"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         secureTextEntry={!confirmPasswordVisible}
//         rightIcon={
//           confirmPasswordVisible ? (
//             <Eye size={moderateScale(20)} color={Colors.DARK_GRAY} />
//           ) : (
//             <EyeOff size={moderateScale(20)} color={Colors.DARK_GRAY} />
//           )
//         }
//         onRightIconPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//       />

//       <View style={styles.passwordRules}>
//         <Text style={styles.ruleText}>✔ must be over 8 characters</Text>
//         <Text style={styles.ruleText}>✔ must contain 1 number</Text>
//         <Text style={styles.ruleText}>✔ must contain 1 special character</Text>
//       </View>

//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
//         <Text style={styles.signUpText}>Sign up</Text>
//       </TouchableOpacity>
//     </ScreenWrapper>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: verticalScale(30),
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   helpText: {
//     fontSize: moderateScale(14),
//     color: Colors.DARK_GRAY,
//   },
//   title: {
//     fontSize: moderateScale(28),
//     fontWeight: '700',
//     color: Colors.TEXT,
//     marginTop: verticalScale(20),
//   },
//   subTitle: {
//     fontSize: moderateScale(14),
//     color: Colors.DARK_GRAY,
//     marginBottom: verticalScale(20),
//   },
//   countryCode: {
//     fontSize: moderateScale(16),
//     color: Colors.TEXT,
//     marginRight: moderateScale(8),
//   },
//   passwordRules: {
//     marginBottom: verticalScale(25),
//   },
//   ruleText: {
//     fontSize: moderateScale(13),
//     color: Colors.DARK_GRAY,
//     marginBottom: verticalScale(5),
//   },
//   signUpButton: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: verticalScale(15),
//     borderRadius: moderateScale(12),
//     alignItems: 'center',
//   },
//   signUpText: {
//     fontSize: moderateScale(16),
//     fontWeight: '600',
//     color: '#fff',
//   },
// });

// export default SignUp;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../../utils/Colors.utils";
import InputField from "../../../components/InputField";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { ArrowLeft, Eye, EyeOff } from "lucide-react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../../utils/supabaseClient";

const SignUp = () => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"user" | "mechanic">("user");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setLoading(false);
        console.error(signUpError);
        Alert.alert("Signup Error", signUpError.message);
        return;
      }

      const user = data?.user;
      if (!user) {
        setLoading(false);
        Alert.alert("Error", "User not created. Try again.");
        return;
      }

      const { error: profileError } = await supabase
        .from("User")
        .insert([
          {
            id: user.id,
            email,
            name,
            phone,
            role,
          },
        ]);

      if (profileError) {
        setLoading(false);
        console.error(profileError);
        Alert.alert("Profile Error", profileError.message);
        return;
      }

      await AsyncStorage.setItem("userId", user.id);

      setLoading(false);
      Alert.alert(
        "Success",
        "Account created successfully! Please verify your email."
      );

      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper contentStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={moderateScale(22)} color={Colors.TEXT} />
        </TouchableOpacity>
        <Text style={styles.helpText}>Help</Text>
      </View>

      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subTitle}>Fill out the form to continue sign up...</Text>

      <InputField label="Name" placeholder="John Doe" value={name} onChangeText={setName} />
      <InputField label="Email" placeholder="abc@gmail.com" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <InputField label="Phone" placeholder="123-456-789" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === "user" && styles.activeRoleButton]}
          onPress={() => setRole("user")}
        >
          <Text style={[styles.roleText, role === "user" && styles.activeRoleText]}>
            User
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, role === "mechanic" && styles.activeRoleButton]}
          onPress={() => setRole("mechanic")}
        >
          <Text style={[styles.roleText, role === "mechanic" && styles.activeRoleText]}>
            Mechanic
          </Text>
        </TouchableOpacity>
      </View>

      {/* Password Fields */}
      <InputField
        label="Password"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisible}
        rightIcon={
          passwordVisible ? (
            <Eye size={20} color={Colors.DARK_GRAY} />
          ) : (
            <EyeOff size={20} color={Colors.DARK_GRAY} />
          )
        }
        onRightIconPress={() => setPasswordVisible(!passwordVisible)}
      />

      <InputField
        label="Confirm Password"
        placeholder="Re-enter Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!confirmPasswordVisible}
        rightIcon={
          confirmPasswordVisible ? (
            <Eye size={20} color={Colors.DARK_GRAY} />
          ) : (
            <EyeOff size={20} color={Colors.DARK_GRAY} />
          )
        }
        onRightIconPress={() =>
          setConfirmPasswordVisible(!confirmPasswordVisible)
        }
      />

      <TouchableOpacity
        style={[styles.signUpButton, loading && { opacity: 0.7 }]}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text style={styles.signUpText}>
          {loading ? "Signing up..." : "Sign up"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInLink}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text style={{ color: Colors.PRIMARY }}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { paddingVertical: verticalScale(30) },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  helpText: { fontSize: moderateScale(14), color: Colors.DARK_GRAY },
  title: {
    fontSize: moderateScale(28),
    fontWeight: "700",
    color: Colors.TEXT,
    marginTop: verticalScale(20),
  },
  subTitle: {
    fontSize: moderateScale(14),
    color: Colors.DARK_GRAY,
    marginBottom: verticalScale(20),
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: verticalScale(15),
  },
  roleButton: {
    borderWidth: 1,
    borderColor: Colors.DARK_GRAY,
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(20),
  },
  activeRoleButton: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
  },
  roleText: {
    fontSize: moderateScale(14),
    color: Colors.DARK_GRAY
  },
  activeRoleText: {
    color: Colors.WHITE,
    fontWeight: "600"
  },
  signUpButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(12),
    alignItems: "center",
    marginTop: verticalScale(10),
  },
  signUpText: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: Colors.WHITE,
  },
  signInLink: {
    marginTop: verticalScale(20),
    alignSelf: "center"
  },
  signInText: {
    color: Colors.DARK_GRAY,
    fontSize: moderateScale(14)
  },
});
