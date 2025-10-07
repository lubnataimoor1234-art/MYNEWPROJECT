
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
    navigation.navigate("Profile"); // navigate to Profile screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerBackground}>
        {/* === Top Row: Arrow + Title + Profile === */}
        <View style={styles.topRow}>
          {/* Back Arrow */}
          {showBack ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <ArrowLeft size={24} color={Colors.WHITE} />
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}

          {/* Title in Center */}
          <Text style={styles.title}>{title}</Text>
        {subtitle ? (
    <Text style={styles.subtitle}>{subtitle}</Text>
  ) : null}
          {/* Profile Icon on Right */}
          {showProfile ? (
            <TouchableOpacity onPress={handleProfilePress} style={styles.profileIcon}>
              <User size={20} color={Colors.PRIMARY} />
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>

        {/* === Search Bar at Bottom of Header === */}
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
  headerBackground: {
    backgroundColor: Colors.PRIMARY,
    height: verticalScale(100),
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
    overflow: "hidden",
    paddingHorizontal: matter.spacing.l,
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
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: Colors.WHITE,
    fontSize: matter.fontSize.lg,
    fontWeight: "700",
  },
  subtitle: {
  color: Colors.WHITE,
  fontSize: matter.fontSize.sm,
  marginTop: 4,
  marginLeft: matter.spacing.l + 6,
  textAlign: "left",
  opacity: 0.9,
},
  
  profileIcon: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: matter.spacing.s,
  },
  placeholder: {
    width: 40,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    paddingHorizontal: matter.spacing.m,
    height: verticalScale(30),
    marginTop: verticalScale(20),
  },
  searchInput: {
    flex: 1,
    fontSize: matter.fontSize.sm,
    paddingVertical: 8,
    color: Colors.TEXT,
    marginLeft: matter.spacing.s,
  },
});
