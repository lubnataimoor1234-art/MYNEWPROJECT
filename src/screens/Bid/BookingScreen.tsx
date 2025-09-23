

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { CheckCircle2, Star, ArrowLeft } from "lucide-react-native";
// import Colors from "../../utils/Colors.utils";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { moderateScale, verticalScale } from "react-native-size-matters";
// import ScreenWrapper from "../../components/ScreenWrapper";

// const BookingScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute<any>();

  
//   const { mechanicName, price, rating, } = route.params || {};

//   return (
//     <ScreenWrapper>

//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <ArrowLeft size={24} color={Colors.TEXT} />
//       </TouchableOpacity>

//       <View style={styles.container}>
//         <View style={styles.iconContainer}>
//           <CheckCircle2 size={70} color={Colors.PRIMARY} />
//         </View>

//         <Text style={styles.title}>Booking Confirmed!</Text>
//         <Text style={styles.subtitle}>
//           {mechanicName || "Mechanic"} is preparing to head to your location
//         </Text>
//         <View style={styles.card}>
//           <View style={styles.rowBetween}>
//             <View>
//               <Text style={styles.name}>{mechanicName || "Unknown"}</Text>
//               <View style={styles.ratingRow}>
//                 <Star
//                   size={moderateScale(14)}
//                   color={Colors.YELLOW}
//                   fill={Colors.YELLOW}
//                 />
//                 <Text style={styles.ratingText}>
//                   {rating ? `${rating} ` : "4.8 "}
//                 </Text>
//               </View>
//             </View>
          
//           </View>

//           <View style={styles.infoRow}>
//             <Text style={styles.label}>Distance</Text>
//             <Text style={styles.value}>3.1 km</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.label}>Arrival time</Text>
//             <Text style={styles.value}>20 min</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.label}>Total Price</Text>
//             <Text style={styles.price}>${price || "0"}</Text>
//           </View>
//         </View>

//         {/* Buttons */}
//         <TouchableOpacity
//           style={styles.primaryButton}
//           onPress={() => navigation.navigate("TrackMechanic" as never)}
//         >
//           <Text style={styles.primaryButtonText}>Track Mechanic</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.secondaryButton}
//           onPress={() => navigation.navigate("Home" as never)}
//         >
//           <Text style={styles.secondaryButtonText}>Back to Home</Text>
//         </TouchableOpacity>
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default BookingScreen;

// const styles = StyleSheet.create({
//   backButton: {

//     marginTop: verticalScale(30),
//     marginLeft: moderateScale(10),
//   },
//   container: {
//     flex: 1,
//     backgroundColor: Colors.BACKGROUND,
//     alignItems: "center",
//     padding: moderateScale(20),
//   },
//   iconContainer: {
//     marginTop: verticalScale(60),
//     marginBottom: verticalScale(20),
//     backgroundColor: Colors.BORDER_GREY,
//     padding: moderateScale(20),
//     borderRadius: 100,
//   },
//   title: {
//     fontSize: moderateScale(18),
//     fontWeight: "700",
//     color: Colors.TEXT,
//   },
//   subtitle: {
//     fontSize: moderateScale(12),
//     color: Colors.TEXT,
//     textAlign: "center",
//     marginTop: 4,
//     marginBottom: verticalScale(20),
//   },
//   card: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: moderateScale(12),
//     padding: moderateScale(15),
//     width: "100%",
//     elevation: 3,
//     marginBottom: verticalScale(20),
//   },
//   rowBetween: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   name: {
//     fontSize: moderateScale(14),
//     fontWeight: "700",
//     color: Colors.TEXT,
//   },
//   ratingRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 3,
//   },
//   ratingText: {
//     fontSize: moderateScale(12),
//     color: Colors.TEXT,
//     marginLeft: 4,
//   },
//   service: {
//     fontSize: moderateScale(12),
//     color: Colors.PRIMARY,
//     fontWeight: "600",
//   },
//   infoRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: verticalScale(6),
//   },
//   label: {
//     fontSize: moderateScale(12),
//     color: Colors.TEXT,
//   },
//   value: {
//     fontSize: moderateScale(12),
//     color: Colors.TEXT,
//   },
//   price: {
//     fontSize: moderateScale(14),
//     color: Colors.PRIMARY,
//     fontWeight: "700",
//   },
//   primaryButton: {
//     backgroundColor: Colors.PRIMARY,
//     borderRadius: moderateScale(10),
//     paddingVertical: verticalScale(10),
//     alignItems: "center",
//     width: "100%",
//     marginBottom: verticalScale(10),
//   },
//   primaryButtonText: {
//     color: Colors.WHITE,
//     fontSize: moderateScale(13),
//     fontWeight: "700",
//   },
//   secondaryButton: {
//     backgroundColor: Colors.BORDER_GREY,
//     borderRadius: moderateScale(10),
//     paddingVertical: verticalScale(10),
//     alignItems: "center",
//     width: "100%",
//   },
//   secondaryButtonText: {
//     color: Colors.TEXT,
//     fontSize: moderateScale(13),
//     fontWeight: "600",
//   },
// });



import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckCircle2, Star, ArrowLeft } from "lucide-react-native";
import Colors from "../../utils/Colors.utils";
import { useNavigation, useRoute } from "@react-navigation/native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import ScreenWrapper from "../../components/ScreenWrapper";
import AppButton from "../../components/AppButton";
import { useTranslation } from "react-i18next";

const BookingScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { t } = useTranslation();

  const { mechanicName, price, rating, service } = route.params || {};

  return (
    <ScreenWrapper>
     
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size={24} color={Colors.TEXT} />
      </TouchableOpacity>

      <View style={styles.container}>
 
        <View style={styles.iconContainer}>
          <CheckCircle2 size={70} color={Colors.PRIMARY} />
        </View>

        <Text style={styles.title}>{t("bookingConfirmedTitle")}</Text>
        <Text style={styles.subtitle}>
          {t("bookingConfirmedMessage", { mechanicName: mechanicName || "Mechanic" })}
        </Text>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.name}>{mechanicName || t("unknown")}</Text>
              <Text style={styles.service}>
                {t(service || "generalRepair")}
              </Text>

              <View style={styles.ratingRow}>
                <Star
                  size={moderateScale(14)}
                  color={Colors.YELLOW}
                  fill={Colors.YELLOW}
                />
                <Text style={styles.ratingText}>
                  {rating ? `${rating}` : "4.8"}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>{t("distance")}</Text>
            <Text style={styles.value}>3.1 km</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>{t("arrivalTime")}</Text>
            <Text style={styles.value}>20 min</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>{t("totalPrice")}</Text>
            <Text style={styles.price}>${price || "0"}</Text>
          </View>
        </View>

        <AppButton
          title={t("trackMechanic")}
          onPress={() => navigation.navigate("TrackMechanic")}
        />

        <AppButton
          title={t("backToHome")}
          onPress={() => navigation.navigate("Home")}
          type="secondary"
        />
      </View>
    </ScreenWrapper>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  backButton: {
    marginTop: verticalScale(30),
    marginLeft: moderateScale(10),
  },
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    alignItems: "center",
    padding: moderateScale(10),
  },
  iconContainer: {
    marginTop: verticalScale(60),
    marginBottom: verticalScale(20),
    backgroundColor: Colors.BORDER_GREY,
    padding: moderateScale(20),
    borderRadius: 100,
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: Colors.TEXT,
  },
  subtitle: {
    fontSize: moderateScale(12),
    color: Colors.TEXT,
    textAlign: "center",
    marginTop: 4,
    marginBottom: verticalScale(20),
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(12),
    padding: moderateScale(15),
    width: "100%",
    elevation: 3,
    marginBottom: verticalScale(20),
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    color: Colors.TEXT,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  ratingText: {
    fontSize: moderateScale(12),
    color: Colors.TEXT,
    marginLeft: 4,
  },
  service: {
    fontSize: moderateScale(12),
    color: Colors.PRIMARY,
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(6),
  },
  label: {
    fontSize: moderateScale(12),
    color: Colors.TEXT,
  },
  value: {
    fontSize: moderateScale(12),
    color: Colors.TEXT,
  },
  price: {
    fontSize: moderateScale(14),
    color: Colors.PRIMARY,
    fontWeight: "700",
  },
});
