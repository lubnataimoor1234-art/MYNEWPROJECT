
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ArrowLeft, User, Search } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/colors.utils";
import matter from "../utils/matter.utils";
import strings from "../utils/strings.utils";
import { moderateScale, verticalScale } from "react-native-size-matters";

interface AppHeaderProps {
  title?: string;
 subtitle?: string;
  showBack?: boolean;
  showProfile?: boolean;
  showSearch?: boolean;
  onSearchChange?: (text: string) => void;
}

const CustomHeader: React.FC<AppHeaderProps> = ({
  title = "",
  subtitle ="",
  showBack = true,
  showProfile = true,
  showSearch = false,
  onSearchChange,
}) => {
  const navigation = useNavigation<any>();

  const handleProfilePress = () => {
    navigation.navigate("Profile"); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerBackground}>
  <View style={styles.topRow}>
  
    {showBack ? (
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <ArrowLeft size={24} color={Colors.WHITE} />
      </TouchableOpacity>
    ) : (
      <View style={styles.placeholder} />
    )}

    {showProfile ? (
      <TouchableOpacity onPress={handleProfilePress} style={styles.profileIcon}>
        <User size={20} color={Colors.PRIMARY} />
      </TouchableOpacity>
    ) : (
      <View style={styles.placeholder} />
    )}
  </View>

 
  <View style={styles.titleContainer}>
    <Text style={styles.title}>{title}</Text>
 
    {subtitle ? (
      <Text style={styles.subtitle}>{subtitle}</Text>
    ) : null}
  </View>
  {showSearch && (
    <View style={styles.searchContainer}>
      <Search size={18} color={Colors.DARK_GRAY} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={Colors.DARK_GRAY}
        style={styles.searchInput}
        onChangeText={onSearchChange}
      />
    </View>
  )}
</View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.PRIMARY,
     borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),

  },
  title: {
  textAlign: "left",
  color: Colors.WHITE,
  fontSize: matter.fontSize.lg,
  fontWeight: "500",
  paddingHorizontal: matter.spacing.l,

},
  titleContainer: {
  alignItems: "flex-start",
  marginTop: verticalScale(5),
  paddingHorizontal: matter.spacing.l,
},
  headerBackground: {
    backgroundColor: Colors.PRIMARY,
    height: verticalScale(110),
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
    overflow: "hidden",
    justifyContent: "space-between",
    paddingBottom: verticalScale(10),
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(10),
     
  },
  backButton: {
    padding: matter.spacing.s,
     textAlign: "left",
  },
  subtitle: {
  color: Colors.WHITE,
  fontSize: matter.fontSize.sm,
  marginTop: 8,
  marginLeft: matter.spacing.s,
  textAlign: "left",
  opacity: 0.9,
  paddingHorizontal: matter.spacing.l,

},
  profileIcon: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: matter.spacing.s,
    textAlign: "right",
      elevation: 2, 
  },
  placeholder: {
    width: 20,
  },
  searchContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: Colors.WHITE,
  borderRadius: matter.radius.lg,
  paddingHorizontal: matter.spacing.m,
  height: verticalScale(30),
  marginTop: verticalScale(8),
  marginHorizontal: matter.spacing.l, 
  shadowColor: Colors.TEXT,
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2, 
},

searchInput: {
  flex: 1,
  fontSize: matter.fontSize.sm,
  color: Colors.TEXT,
  marginLeft: matter.spacing.s,
  paddingVertical: 0, 
},
});
