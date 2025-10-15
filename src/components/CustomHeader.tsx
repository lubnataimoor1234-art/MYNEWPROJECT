


// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { ArrowLeft, User, Search, Bell } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Colors from "../utils/colors.utils";
// import matter from "../utils/matter.utils";
// import { moderateScale, verticalScale } from "react-native-size-matters";

// interface AppHeaderProps {
//   title?: string;
//   subtitle?: string;
//   showBack?: boolean;
//   showProfile?: boolean;
//   showBell?: boolean;
//   showSearch?: boolean;
  
//   onSearchChange?: (text: string) => void;
// }

// const CustomHeader: React.FC<AppHeaderProps> = ({
//   title = "",
//   subtitle = "",
//   showBack = true,
//   showProfile = false, // default off
//   showBell = false, // default off
//   showSearch = false,
//   mapActive =false,
 
//   onSearchChange,
// }) => {
//   const navigation = useNavigation<any>();

//   const handleProfilePress = () => {
//     navigation.navigate("Profile");
//   };

//   const handleBellPress = () => {
//     console.log("Bell pressed!");
//     // Add your bell press action here
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.headerBackground}>
//         <View style={styles.topRow}>
//           {/* Left: Back Button */}
//           {showBack ? (
//             <TouchableOpacity
//               onPress={() => navigation.goBack()}
//               style={styles.backButton}
//             >
//               <ArrowLeft size={24} color={Colors.WHITE} />
//             </TouchableOpacity>
//           ) : (
//             <View style={styles.placeholder} />
//           )}

//           {/* Right: Bell OR Profile */}
//           <View style={styles.rightIcons}>
//             {showBell ? (
//               <TouchableOpacity onPress={handleBellPress} style={styles.iconButton}>
//                 <Bell color={Colors.WHITE} size={22} />
//               </TouchableOpacity>
//             ) : showProfile ? (
//               <TouchableOpacity
//                 onPress={handleProfilePress}
//                 style={styles.profileIcon}
//               >
//                 <User size={20} color={Colors.PRIMARY} />
//               </TouchableOpacity>
//             ) : (
//               <View style={styles.placeholder} />
//             )}
//           </View>
//         </View>

//         {/* Title + Subtitle */}
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
//      borderBottomLeftRadius: moderateScale(550),
//     borderBottomRightRadius: moderateScale(150),

//   },
//   title: {
//   marginTop: verticalScale(-5),
//   textAlign: "left",
//   color: Colors.WHITE,
//   fontSize: matter.fontSize.lg,
//   fontWeight: "500",
//   paddingHorizontal: matter.spacing.l,

// },
//   titleContainer: {
//   alignItems: "flex-start",
//   marginTop: verticalScale(5),
//   paddingHorizontal: matter.spacing.l,
// },
//   headerBackground: {
//     backgroundColor: Colors.PRIMARY,
//     height: verticalScale(110),
//     borderBottomLeftRadius: moderateScale(40),
//     borderBottomRightRadius: moderateScale(40),
//     overflow: "hidden",
//     justifyContent: "space-between",
//     paddingBottom: verticalScale(10),
//   },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: verticalScale(10),
     
//   },
//   backButton: {
//     padding: matter.spacing.s,
//      textAlign: "left",
//   },
//   subtitle: {
//   color: Colors.WHITE,
//   fontSize: matter.fontSize.sm,
//   marginTop: 8,
//   marginLeft: matter.spacing.s,
//   textAlign: "left",
//   opacity: 0.9,
//   paddingHorizontal: matter.spacing.l,

// },
//   profileIcon: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: 20,
//     padding: matter.spacing.s,
//     textAlign: "right",
//       elevation: 2, 
//        marginRight:15,
//   },
//   placeholder: {
//     width: 20,
//   },
//   searchContainer: {
//   flexDirection: "row",
//   alignItems: "center",
//   backgroundColor: Colors.WHITE,
//   borderRadius: matter.radius.lg,
//   paddingHorizontal: matter.spacing.m,
//   height: verticalScale(30),
//   marginTop: verticalScale(8),
//   marginHorizontal: matter.spacing.l, 
//   shadowColor: Colors.TEXT,
//   shadowOpacity: 0.1,
//   shadowRadius: 3,
//   elevation: 2, 
// },
// rightIcons: {
//   flexDirection: "row",
//   alignItems: "center",
//   marginRight: 10,
// },
// iconButton: {
//   padding: matter.spacing.s,
//   marginRight: 5,
// },
// searchInput: {
//   flex: 1,
//   fontSize: matter.fontSize.sm,
//   color: Colors.TEXT,
//   marginLeft: matter.spacing.s,
//   paddingVertical: 0, 
// },
// });
    import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ArrowLeft, User, Search, MapPin } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/colors.utils";
import matter from "../utils/matter.utils";
import { moderateScale, verticalScale } from "react-native-size-matters";

interface AppHeaderProps {
  showBell?:boolean;
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  showProfile?: boolean;
  showSearch?: boolean;
  showMap?: boolean; // ✅ new prop for map icon
  mapActive?: boolean; // ✅ toggle active map state
  onMapPress?: () => void; // ✅ event handler for map
  onSearchChange?: (text: string) => void;
}

const CustomHeader: React.FC<AppHeaderProps> = ({
  title = "",
  subtitle = "",
  showBack = true,
  showProfile = false,
  showSearch = false,
  showMap = false,
  mapActive = false,
  showBell=false,
  onMapPress,
  onSearchChange,
}) => {
  const navigation = useNavigation<any>();

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerBackground}>
        {/* Top Row */}
        <View style={styles.topRow}>
          {/* Left: Back Button */}
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

          {/* Right: Map or Profile */}
          <View style={styles.rightIcons}>
            {showMap ? (
              <TouchableOpacity
                onPress={onMapPress}
                style={[
                  styles.iconButton,
                  mapActive && styles.mapIconActive, // highlight if active
                ]}
              >
                <MapPin
                  color={mapActive ? Colors.WHITE : Colors.WHITE}
                  size={22}
                />
              </TouchableOpacity>
            ) : showProfile ? (
              <TouchableOpacity
                onPress={handleProfilePress}
                style={styles.profileIcon}
              >
                <User size={20} color={Colors.PRIMARY} />
              </TouchableOpacity>
            ) : (
              <View style={styles.placeholder} />
            )}
          </View>
        </View>

        {/* Title & Subtitle */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>

        {/* Search Bar */}
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
    borderBottomLeftRadius: moderateScale(550),
    borderBottomRightRadius: moderateScale(150),
  },
  headerBackground: {
    backgroundColor: Colors.PRIMARY,
    height: verticalScale(110),
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
  },
  backButton: {
    padding: matter.spacing.s,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  iconButton: {
    padding: matter.spacing.s,
    marginRight: 5,
  },
  mapIconActive: {
    backgroundColor: Colors.PRIMARY ,
    borderRadius: 20,
    padding: matter.spacing.s,
  },
  profileIcon: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: matter.spacing.s,
    elevation: 2,
    marginRight: 15,
  },
  placeholder: {
    width: 20,
  },
  titleContainer: {
    alignItems: "flex-start",
   // marginTop: verticalScale(5),
    paddingHorizontal: matter.spacing.l,
  },
  title: {
    //marginTop: verticalScale(-5),
    color: Colors.WHITE,
    fontSize: matter.fontSize.lg,
    fontWeight: "500",
  },
  subtitle: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.sm,
    marginTop: 8,
    opacity: 0.9,
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
