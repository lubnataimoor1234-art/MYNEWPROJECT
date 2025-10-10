import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import strings from "../../utils/strings.utils";
import CustomHeader from "../../components/CustomHeader";

const HistoryScreen = () => {
  const [activeTab, setActiveTab] = useState("active");
const [search, setSearch] = useState("");
  const renderBids = () => {
    switch (activeTab) {
      case "active":
        return (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Active Bid #12345</Text>
            <Text style={styles.cardText}>Mechanic: Ali Workshop</Text>
            <Text style={styles.cardText}>Service: Engine Repair</Text>
            <Text style={styles.cardText}>Status: Ongoing</Text>
          </View>
        );
      case "pending":
        return (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Pending Bid #67890</Text>
            <Text style={styles.cardText}>Mechanic: Khan Garage</Text>
            <Text style={styles.cardText}>Service: Battery Replacement</Text>
            <Text style={styles.cardText}>Status: Awaiting Confirmation</Text>
          </View>
        );
      case "completed":
        return (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Completed Bid #54321</Text>
            <Text style={styles.cardText}>Mechanic: AutoFix Service</Text>
            <Text style={styles.cardText}>Service: Bike Towing</Text>
            <Text style={styles.cardText}>Status: Completed</Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
   <CustomHeader title = " HISTORY " 
       showSearch  
       onSearchChange={setSearch} 
       showProfile />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "active" && styles.activeTab]}
          onPress={() => setActiveTab("active")}
        >
          <Text style={[styles.tabText, activeTab === "active" && styles.activeText]}>
            {strings.history.active}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === "pending" && styles.activeTab]}
          onPress={() => setActiveTab("pending")}
        >
          <Text style={[styles.tabText, activeTab === "pending" && styles.activeText]}>
            {strings.history.pending}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === "completed" && styles.activeTab]}
          onPress={() => setActiveTab("completed")}
        >
          <Text style={[styles.tabText, activeTab === "completed" && styles.activeText]}>
            {strings.history.completed}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bids List */}
      <ScrollView style={styles.listContainer}>{renderBids()}</ScrollView>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    //paddingHorizontal: matter.padding.screen,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.BACKGROUND,
    borderRadius: matter.radius.md,
    marginBottom: matter.spacing.m,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: matter.spacing.s,
    borderRadius: matter.radius.md,
  },
  activeTab: {
    backgroundColor: Colors.PRIMARY,
  },
  tabText: {
    fontSize: matter.fontSize.sm,
    color: Colors.DARK_GRAY,
    fontWeight: "600",
  },
  activeText: {
    color: Colors.WHITE,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: matter.padding.screen,
  },
  card: {
    backgroundColor: Colors.BACKGROUND,
    borderRadius: matter.radius.lg,
    padding: matter.spacing.m,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    marginBottom: matter.spacing.m,
  },
  cardTitle: {
    fontSize: matter.fontSize.md,
    fontWeight: "700",
    color: Colors.TEXT,
    marginBottom: matter.spacing.s,
  },
  cardText: {
    fontSize: matter.fontSize.sm,
    color: Colors.DARK_GRAY,
    marginBottom: 2,
  },
});



// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
//   RefreshControl,
// } from "react-native";
// import { Star } from "lucide-react-native";
// import CustomHeader from "../../components/CustomHeader";
// import matter from "../../utils/matter.utils";
// import strings from "../../utils/strings.utils";
// import Colors from "../../utils/colors.utils";

// const HistoryScreen = () => {
//   const [historyData, setHistoryData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchHistory = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // 🟩 Replace this with your real API endpoint
//       const response = await fetch("https://your-api-url.com/api/bids/history");

//       if (!response.ok) {
//         throw new Error("Failed to fetch history data");
//       }

//       const data = await response.json();
//       setHistoryData(data);
//     } catch (err: any) {
//       console.error("Fetch error:", err);
//       setError(err?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   const onRefresh = () => {
//     setRefreshing(true);
//     fetchHistory();
//   };

//   const renderCard = ({ item }: any) => (
//     <View style={styles.card}>
//       <View style={styles.cardHeader}>
//         <Text style={styles.service}>{item.service_name}</Text>
//         <View style={styles.statusBadge}>
//           <Text style={styles.statusText}>{item.status}</Text>
//         </View>
//       </View>

//       <Text style={styles.name}>{item.mechanic_name}</Text>
//       <Text style={styles.date}>{item.date}</Text>

//       <View style={styles.footer}>
//         <View style={styles.ratingRow}>
//           {[...Array(item.rating || 0)].map((_, i) => (
//             <Star key={i} size={16} color="#FFD700" fill="#FFD700" />
//           ))}
//         </View>
//         <Text style={styles.price}>${item.price}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <CustomHeader  />

//       <Text style={styles.subtitle}>{strings.history.subtitle}</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color={Colors.PRIMARY} />
//       ) : error ? (
//         <Text style={styles.errorText}>{error}</Text>
//       ) : (
//         <FlatList
//           data={historyData}
//           renderItem={renderCard}
//           keyExtractor={(item) => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       )}
//     </View>
//   );
// };


// export default HistoryScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//     paddingHorizontal: matter.padding.screen,
//   },
//   subtitle: {
//     fontSize: matter.fontSize.sm,
//     color: Colors.DARK_GRAY,
//     marginBottom: matter.spacing.l,
//   },
//   errorText: {
//     color: "red",
//     textAlign: "center",
//     marginTop: matter.spacing.l,
//   },
//   card: {
//     backgroundColor: Colors.WHITE,
//     borderRadius: matter.radius.lg,
//     padding: matter.spacing.m,
//     marginBottom: matter.spacing.m,
//     borderWidth: 1,
//     borderColor: Colors.BORDER_GREY,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   cardHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 6,
//   },
//   service: {
//     fontSize: matter.fontSize.md,
//     fontWeight: "600",
//     color: Colors.TEXT,
//   },
//   statusBadge: {
//     backgroundColor: "#E7FBE9",
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: matter.radius.sm,
//   },
//   statusText: {
//     fontSize: matter.fontSize.lg,
//     color: "#1FA75C",
//     fontWeight: "600",
//   },
//   name: {
//     fontSize: matter.fontSize.sm,
//     color: Colors.DARK_GRAY,
//     marginBottom: 2,
//   },
//   date: {
//     fontSize: matter.fontSize.sm,
//     color: Colors.DARK_GRAY,
//     marginBottom: matter.spacing.s,
//   },
//   footer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   ratingRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   price: {
//     fontSize: matter.fontSize.md,
//     fontWeight: "600",
//     color: Colors.TEXT,
//   },
// });
