import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckCircle2, Star } from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import { useNavigation } from "@react-navigation/native";

const BookingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* ✅ Checkmark Icon */}
      <View style={styles.iconContainer}>
        <CheckCircle2 size={70} color={Colors.PRIMARY} />
      </View>

      {/* ✅ Heading */}
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.subtitle}>
        Amit Sharma is preparing to head to your location
      </Text>

      {/* ✅ Mechanic Card */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.name}>Amit Sharma</Text>
            <View style={styles.ratingRow}>
              <Star size={matter.moderateScale(14)} color="#FFD700" fill="#FFD700" />
              <Text style={styles.ratingText}>4.8 • 287 jobs</Text>
            </View>
          </View>
          <Text style={styles.service}>Battery Issues</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Distance</Text>
          <Text style={styles.value}>3.1 km</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Arrival time</Text>
          <Text style={styles.value}>20 min</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Total Price</Text>
          <Text style={styles.price}>$40</Text>
        </View>
      </View>

      {/* <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("TrackMechanic")}
      >
        <Text style={styles.primaryButtonText}>Track Mechanic</Text>
      </TouchableOpacity> */}

       {/* <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.secondaryButtonText}>Back to Home</Text>
      </TouchableOpacity> */}
    </View> 
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    alignItems: "center",
    padding: matter.spacing.l,
  },
  iconContainer: {
    marginTop: matter.verticalScale(40),
    marginBottom: matter.spacing.m,
    backgroundColor: Colors.BORDER_GREY,
    padding: matter.spacing.l,
    borderRadius: 100,
  },
  title: {
    fontSize: matter.fontSize.md,
    fontWeight: "700",
    color: Colors.TEXT,
  },
  subtitle: {
    fontSize: matter.fontSize.s,
    color: Colors.TEXT,
    textAlign: "center",
    marginTop: 4,
    marginBottom: matter.spacing.l,
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    padding: matter.spacing.m,
    width: "100%",
    elevation: 3,
    marginBottom: matter.spacing.l,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: matter.fontSize.sm,
    fontWeight: "700",
    color: Colors.TEXT,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  ratingText: {
    fontSize: matter.fontSize.s,
    color: Colors.TEXT,
    marginLeft: 4,
  },
  service: {
    fontSize: matter.fontSize.s,
    color: Colors.PRIMARY,
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: matter.spacing.s,
  },
  label: {
    fontSize: matter.fontSize.s,
    color: Colors.TEXT,
  },
  value: {
    fontSize: matter.fontSize.s,
    color: Colors.TEXT,
  },
  price: {
    fontSize: matter.fontSize.sm,
    color: Colors.PRIMARY,
    fontWeight: "700",
  },
  primaryButton: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: matter.radius.lg,
    paddingVertical: matter.spacing.m,
    alignItems: "center",
    width: "100%",
    marginBottom: matter.spacing.s,
  },
  primaryButtonText: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.s,
    fontWeight: "700",
  },
  secondaryButton: {
    backgroundColor: Colors.BORDER_GREY,
    borderRadius: matter.radius.lg,
    paddingVertical: matter.spacing.m,
    alignItems: "center",
    width: "100%",
  },
  secondaryButtonText: {
    color: Colors.TEXT,
    fontSize: matter.fontSize.s,
    fontWeight: "600",
  },
});
// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { CheckCircle } from "lucide-react-native";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import { useRoute, useNavigation } from "@react-navigation/native";

// const BookingConfirmedScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { mechanic } = route.params || {};

//   return (
//     <View style={styles.container}>
//       <View style={styles.iconCircle}>
//         <CheckCircle size={60} color={Colors.PRIMARY} />
//       </View>

//       <Text style={styles.title}>Booking Confirmed!</Text>
//       <Text style={styles.subtitle}>
//         {mechanic?.mechanic} is preparing to head to your location
//       </Text>

//       <View style={styles.card}>
//         <Text style={styles.mechanicName}>{mechanic?.mechanic}</Text>
//         <Text style={styles.rating}>⭐ {mechanic?.rating} ({mechanic?.reviews} jobs)</Text>

//         <View style={styles.row}>
//           <Text style={styles.label}>Service</Text>
//           <Text style={styles.value}>{mechanic?.service}</Text>
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.label}>Distance</Text>
//           <Text style={styles.value}>{mechanic?.distance}</Text>
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.label}>Arrival Time</Text>
//           <Text style={styles.value}>{mechanic?.time}</Text>
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.label}>Total Price</Text>
//           <Text style={[styles.value, { color: Colors.PRIMARY }]}>${mechanic?.price}</Text>
//         </View>
//       </View>

//       {/* <TouchableOpacity
//         style={styles.trackButton}
//         onPress={() => navigation.navigate("TrackMechanic")}
//       >
//         <Text style={styles.trackText}>Track Mechanic</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.navigate("HomeScreen")}
//       >
//         <Text style={styles.backText}>Back to Home</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// export default BookingConfirmedScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//     alignItems: "center",
//     padding: matter.padding.screen,
//   },
//   iconCircle: {
//     backgroundColor: Colors.BACKGROUND,
//     borderRadius: 100,
//     padding: matter.spacing.l,
//     marginVertical: matter.spacing.l,
//   },
//   title: {
//     fontSize: matter.fontSize.lg,
//     fontWeight: "700",
//     color: Colors.TEXT,
//   },
//   subtitle: {
//     color: Colors.DARK_GRAY,
//     marginVertical: matter.spacing.s,
//     textAlign: "center",
//   },
//   card: {
//     width: "100%",
//     backgroundColor: Colors.BACKGROUND,
//     borderRadius: matter.radius.lg,
//     padding: matter.spacing.m,
//     marginTop: matter.spacing.l,
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//   },
//   mechanicName: {
//     fontSize: matter.fontSize.md,
//     fontWeight: "600",
//     color: Colors.TEXT,
//   },
//   rating: {
//     color: Colors.DARK_GRAY,
//     marginBottom: matter.spacing.m,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: matter.spacing.s,
//   },
//   label: {
//     color: Colors.DARK_GRAY,
//   },
//   value: {
//     color: Colors.TEXT,
//     fontWeight: "600",
//   },
//   trackButton: {
//     backgroundColor: Colors.PRIMARY,
//     width: "100%",
//     paddingVertical: matter.spacing.m,
//     borderRadius: matter.radius.md,
//     alignItems: "center",
//     marginTop: matter.spacing.l,
//   },
//   trackText: {
//     color: Colors.WHITE,
//     fontWeight: "600",
//   },
//   backButton: {
//     width: "100%",
//     paddingVertical: matter.spacing.m,
//     borderRadius: matter.radius.md,
//     alignItems: "center",
//     marginTop: matter.spacing.s,
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//   },
//   backText: {
//     color: Colors.TEXT,
//     fontWeight: "600",
//   },
// });
