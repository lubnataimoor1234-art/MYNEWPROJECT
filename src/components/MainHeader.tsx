
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { ArrowLeft, User, Search, MapPin } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Colors from "../utils/colors.utils";
// import matter from "../utils/matter.utils";
// import { moderateScale, verticalScale } from "react-native-size-matters";

// interface AppHeaderProps {
//   showBell?:boolean;
//   title?: string;
//   subtitle?: string;
//   showBack?: boolean;
//   showProfile?: boolean;
//   showSearch?: boolean;
//   showMap?: boolean; 
//   mapActive?: boolean; 
//   onMapPress?: () => void; 
//   onSearchChange?: (text: string) => void;
// }

// const CustomHeader: React.FC<AppHeaderProps> = ({
//   title = "",
//   subtitle = "",
//   showBack = true,
//   showProfile = false,
//   showSearch = false,
//   showMap = false,
//   mapActive = false,
//   showBell=false,
//   onMapPress,
//   onSearchChange,
// }) => {
//   const navigation = useNavigation<any>();

//   const handleProfilePress = () => {
//     navigation.navigate("Profile");
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.headerBackground}>
//         {/* Top Row */}
//         <View style={styles.topRow}>
//           {/* Left: Back Button */}
//           {showBack ? (
//             <TouchableOpacity
//               onPress={() => navigation.goBack()}
//               style={styles.backButton}
//             >
//               <ArrowLeft size={30}  color={Colors.WHITE} />
//             </TouchableOpacity>
//           ) : (
//             <View style={styles.placeholder} />
//           )}

//           {/* Right: Map or Profile */}
//           <View style={styles.rightIcons}>
//             {showMap ? (
//               <TouchableOpacity
//                 onPress={onMapPress}
//                 style={[
//                   styles.iconButton,
//                   mapActive && styles.mapIconActive, // highlight if active
//                 ]}
//               >
//                 <MapPin
//                   color={mapActive ? Colors.PRIMARY : Colors.PRIMARY}
//                   size={25}
//                 />
//               </TouchableOpacity>
//             ) : showProfile ? (
//               <TouchableOpacity
//                 onPress={handleProfilePress}
//                 style={styles.profileIcon}
//               >
//                 <User size={19} color={Colors.PRIMARY} />
//               </TouchableOpacity>
//             ) : (
//               <View style={styles.placeholder} />
//             )}
//           </View>
//         </View>

//         {/* Title & Subtitle */}
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>{title}</Text>
//           {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
//         </View>

//         {/* Search Bar */}
//         {showSearch && (
//           <View style={styles.searchContainer}>
//             <Search size={18} color={Colors.DARK_GRAY} />
//             <TextInput
//               placeholder="Search..."
//               placeholderTextColor={Colors.DARK_GRAY}
//               style={styles.searchInput}
//               onChangeText={onSearchChange}
//             />
//           </View>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CustomHeader;

// const styles = StyleSheet.create({
//   safeArea: {
//     backgroundColor: Colors.PRIMARY,
//     borderBottomLeftRadius: moderateScale(550),
//     borderBottomRightRadius: moderateScale(150),
//   },
//   headerBackground: {
//     backgroundColor: Colors.PRIMARY,
//     height: verticalScale(120),
//     borderBottomLeftRadius: moderateScale(40),
//     borderBottomRightRadius: moderateScale(40),
//     justifyContent: "space-between",
//     paddingBottom: verticalScale(10),
//   },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: verticalScale(10),
//     paddingHorizontal: 5,
//   },
//   backButton: {
//     padding: matter.spacing.s,
//   },
//   rightIcons: {
//     flexDirection: "row",
//     alignItems: "center",
    
//   },
//   iconButton: {
//     padding: matter.spacing.s,
//     marginRight: 5,
//   },
//   mapIconActive: {
//     backgroundColor: Colors.WHITE ,
//     borderRadius: 22,
//     padding: matter.spacing.s,
//   },
//   profileIcon: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: 20,
//     padding: matter.spacing.s,
//     elevation: 2,
//     marginRight: 15,
//   },
//   placeholder: {
//     width: 20,
//   },
//   titleContainer: {
//     alignItems: "flex-start",

//     paddingHorizontal: matter.spacing.xl,
//   },
//   title: {
//     color: Colors.WHITE,
//     fontSize: matter.fontSize.lg,
//     fontWeight: "800",
//   },
//   subtitle: {
//     color: Colors.WHITE,
//     fontSize: matter.fontSize.sm,
//     marginTop: 8,
//     opacity: 0.9,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.WHITE,
//     borderRadius: matter.radius.lg,
//     paddingHorizontal: matter.spacing.m,
//     height: verticalScale(30),
//     marginTop: verticalScale(8),
//     marginHorizontal: matter.spacing.l,
//     elevation: 2,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: matter.fontSize.sm,
//     color: Colors.TEXT,
//     marginLeft: matter.spacing.s,
//     paddingVertical: 0,
//   },
// });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ArrowLeft, Bell, Search, MapPin } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/Colors.utils";
import matter from "../utils/matter.utils";
import { moderateScale, verticalScale } from "react-native-size-matters";

interface AppHeaderProps {
  showBell?: boolean;
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showMap?: boolean;
  mapActive?: boolean;
  onMapPress?: () => void;
  onSearchChange?: (text: string) => void;
}

const MainHeader: React.FC<AppHeaderProps> = ({
  title = "",
  subtitle = "",
  showBack = true,
  showSearch = false,
  showMap = false,
  mapActive = false,
  showBell = false,
  onMapPress,
  onSearchChange,
}) => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerBackground}>
        {/* ===== Top Row ===== */}
        <View style={styles.topRow}>
          {/* Back Button */}
          {showBack ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <ArrowLeft size={28} color={Colors.WHITE} />
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}

          {/* Right Icons */}
          <View style={styles.rightIcons}>
            {showMap && (
              <TouchableOpacity
                onPress={onMapPress}
                style={[
                  styles.iconButton,
                  mapActive && styles.mapIconActive,
                ]}
              >
                <MapPin
                  color={mapActive ? Colors.PRIMARY : Colors.WHITE}
                  size={22}
                />
              </TouchableOpacity>
            )}

            {showBell && (
              <TouchableOpacity
                style={styles.notificationIcon}
                onPress={() => navigation.navigate("Notifications")}
              >
                <Bell size={20} color={Colors.PRIMARY} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* ===== Title & Subtitle ===== */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>

        {/* ===== Search Bar ===== */}
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

export default MainHeader;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: moderateScale(550),
    borderBottomRightRadius: moderateScale(150),
  },
  headerBackground: {
    backgroundColor: Colors.PRIMARY,
    height: verticalScale(120),
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
    justifyContent: "space-between",
    paddingBottom: verticalScale(10),
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(10),
    paddingHorizontal: moderateScale(8),
  },
  backButton: {
    padding: matter.spacing.s,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    padding: matter.spacing.s,
    marginRight: moderateScale(5),
  },
  mapIconActive: {
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(22),
    padding: matter.spacing.s,
  },
  notificationIcon: {
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(20),
    padding: matter.spacing.s,
    elevation: 2,
    marginRight: moderateScale(15),
  },
  placeholder: {
    width: moderateScale(20),
  },
  titleContainer: {
    alignItems: "flex-start",
    paddingHorizontal: matter.spacing.xl,
  },
  title: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.lg,
    fontWeight: "800",
  },
  subtitle: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.sm,
    marginTop: verticalScale(4),
    opacity: 0.9,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    paddingHorizontal: matter.spacing.m,
    height: verticalScale(32),
    marginTop: verticalScale(8),
    marginHorizontal: matter.spacing.l,
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

