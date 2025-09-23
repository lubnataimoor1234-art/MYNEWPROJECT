// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import Colors from '../../../utils/Colors.utils';
// import InputField from '../../../components/InputField';
// import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
// import { moderateScale, verticalScale } from 'react-native-size-matters';
// import ScreenWrapper from '../../../components/ScreenWrapper';
// import { useNavigation } from '@react-navigation/native';

// const SignIn = () => {
//   const navigation = useNavigation<any>();
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [password, setPassword] = useState('');

//   const handleForgotPassword = () => {
//     navigation.navigate('ForgotPassword');
//   }

//   return (
//     <ScreenWrapper contentStyle={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <ArrowLeft size={moderateScale(22)} color={Colors.TEXT} />
//         </TouchableOpacity>
//         <Text style={styles.helpText}>Help</Text>
//       </View>

//       <Text style={styles.title}>Sign in</Text>
//       <Text style={styles.subTitle}>Welcome back! Please sign in to continue.</Text>

//       <InputField
//         label="Email or Phone Number"
//         placeholder="Enter your email or phone"
//         value={emailOrPhone}
//         onChangeText={setEmailOrPhone}
//         keyboardType="default"
//       />

//       <InputField
//         label="Password"
//         placeholder="Enter your password"
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

//       <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.signInButton}>
//         <Text style={styles.signInText}>Sign in</Text>
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
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: verticalScale(30),
//   },
//   forgotPasswordText: {
//     fontSize: moderateScale(14),
//     color: Colors.PRIMARY,
//     fontWeight: '500',
//   },
//   signInButton: {
//     backgroundColor: Colors.PRIMARY,
//     paddingVertical: verticalScale(15),
//     borderRadius: moderateScale(12),
//     alignItems: 'center',
//   },
//   signInText: {
//     fontSize: moderateScale(16),
//     fontWeight: '600',
//     color: '#fff',
//   },
// });

// export default SignIn;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setToken } from "../../../store/reducers/auth-persist.reducer";
import { supabase } from "../../../utils/supabaseClient";
import Colors from "../../../utils/Colors.utils";
import InputField from "../../../components/InputField";
import { ArrowLeft, Eye, EyeOff } from "lucide-react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      // 🔹 Supabase Sign In
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        Alert.alert("Login failed", error.message);
        setLoading(false);
        return;
      }

      if (data?.session) {
        const token = data.session.access_token;

        // ✅ Store token locally for persistence
        await AsyncStorage.setItem("userToken", token);

        // ✅ Save to Redux
        dispatch(setIsLoggedIn(true));
        dispatch(setToken(token));

        Alert.alert("Success", "Logged in successfully!");

        // ✅ Navigate to home
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else {
        Alert.alert("Error", "No active session found.");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Something went wrong during sign in.");
    } finally {
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

      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subTitle}>
        Welcome back! Please sign in to continue.
      </Text>

      <InputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisible}
        rightIcon={
          passwordVisible ? (
            <Eye size={moderateScale(20)} color={Colors.DARK_GRAY} />
          ) : (
            <EyeOff size={moderateScale(20)} color={Colors.DARK_GRAY} />
          )
        }
        onRightIconPress={() => setPasswordVisible(!passwordVisible)}
      />

      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={handleSignIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.signInText}>Sign in</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpLink}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signUpText}>
          Don’t have an account?{" "}
          <Text style={{ color: Colors.PRIMARY }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

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
  forgotPassword: { alignSelf: "flex-end", marginBottom: verticalScale(30) },
  forgotPasswordText: {
    fontSize: moderateScale(14),
    color: Colors.PRIMARY,
    fontWeight: "500",
  },
  signInButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(12),
    alignItems: "center",
  },
  signInText: { fontSize: moderateScale(16), fontWeight: "600", color: "#fff" },
  signUpLink: { marginTop: verticalScale(20), alignSelf: "center" },
  signUpText: { color: Colors.DARK_GRAY, fontSize: moderateScale(14) },
});

export default SignIn;
