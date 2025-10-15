
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Trash2, Star } from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import CustomHeader from "../../components/CustomHeader";

const HistoryScreen = () => {
  const [activeTab, setActiveTab] = useState("active");

  // Dummy data for each tab
  const activeData = [
    { id: 1, service: "Oil Change", mechanic: "Ali Workshop", date: "15 Oct 2025", price: 50 },
    { id: 2, service: "Brake Check", mechanic: "Khan Garage", date: "12 Oct 2025", price: 40 },
  ];

  const pendingData = [
    { id: 3, service: "Engine Repair", mechanic: "Raza Auto", date: "10 Oct 2025", price: 120 },
  ];

  const completedData = [
    { id: 4, service: "Battery Replacement", mechanic: "Adeel Motors", date: "02 Oct 2025", price: 90 },
    { id: 5, service: "Wheel Alignment", mechanic: "Zeeshan Auto", date: "25 Sep 2025", price: 60 },
  ];

  const handleDelete = (id: number) => {
    Alert.alert("Delete Record", "Are you sure you want to delete this item?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => console.log("Deleted:", id) },
    ]);
  };

  const renderTabData = () => {
    const data =
      activeTab === "active"
        ? activeData
        : activeTab === "pending"
        ? pendingData
        : completedData;

    return data.map((item) => (
      <View key={item.id} style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.serviceName}>{item.service}</Text>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Trash2 size={18} color={Colors.RED} />
          </TouchableOpacity>
        </View>

        <Text style={styles.mechanicName}>{item.mechanic}</Text>
        <Text style={styles.date}>{item.date}</Text>

        <View style={styles.footerRow}>
          <View style={styles.ratingRow}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} color="#FFD700" fill="#FFD700" />
            ))}
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="History" showProfile />

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {["active", "pending", "completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderTabData()}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.WHITE,
    marginHorizontal: matter.spacing.m,
    marginTop: matter.spacing.m,
    borderRadius: matter.radius.lg,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    padding: matter.spacing.s,
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
    fontSize: matter.fontSize.s,
    fontWeight: "600",
    color: Colors.TEXT,
  },
  activeTabText: {
    color: Colors.WHITE,
  },
  scrollContent: {
    paddingHorizontal: matter.spacing.m,
    paddingTop: matter.spacing.m,
    paddingBottom: matter.spacing.l,
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    padding: matter.spacing.m,
    marginBottom: matter.spacing.m,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  serviceName: {
    fontSize: matter.fontSize.sm,
    fontWeight: "700",
    color: Colors.TEXT,
  },
  mechanicName: {
    fontSize: matter.fontSize.s,
    color: Colors.TEXT,
    marginTop: 3,
  },
  date: {
    fontSize: matter.fontSize.s,
    color: Colors.DARK_GRAY,
    marginTop: 2,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: matter.spacing.s,
  },
  ratingRow: {
    flexDirection: "row",
  },
  price: {
    fontSize: matter.fontSize.sm,
    fontWeight: "700",
    color: Colors.PRIMARY,
  },
});

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { Trash2 } from "lucide-react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Colors from "../../utils/colors.utils";
// import matter from "../../utils/matter.utils";
// import CustomHeader from "../../components/CustomHeader";
// import { moderateScale, verticalScale } from "react-native-size-matters";

// const ServiceHistoryScreen = () => {
//   const [activeTab, setActiveTab] = useState<"active" | "pending" | "completed">(
//     "active"
//   );

//   const tabs = [
//     { key: "active", label: "Active" },
//     { key: "pending", label: "Pending" },
//     { key: "completed", label: "Completed" },
//   ];

//   // Example data (unique per tab)
//   const data = {
//     active: [
//       { id: "1", title: "Oil Change - Honda Civic", date: "12 Oct 2025" },
//       { id: "2", title: "Tire Replacement - Corolla", date: "10 Oct 2025" },
//     ],
//     pending: [
//       { id: "3", title: "Engine Repair - Suzuki Alto", date: "8 Oct 2025" },
//     ],
//     completed: [
//       { id: "4", title: "AC Repair - Honda City", date: "5 Oct 2025" },
//       { id: "5", title: "Brake Check - Kia Sportage", date: "2 Oct 2025" },
//     ],
//   };

//   const handleDelete = (id: string) => {
//     console.log("Deleted item:", id);
//     // You can later implement actual delete logic here
//   };

//   const renderItem = ({ item }: any) => (
//     <View style={styles.card}>
//       <View style={{ flex: 1 }}>
//         <Text style={styles.serviceTitle}>{item.title}</Text>
//         <Text style={styles.serviceDate}>{item.date}</Text>
//       </View>
//       <TouchableOpacity onPress={() => handleDelete(item.id)}>
//         <Trash2 color={Colors.RED} size={22} />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <CustomHeader title="Service History" showBack={true} />

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {tabs.map((tab) => (
//           <TouchableOpacity
//             key={tab.key}
//             onPress={() => setActiveTab(tab.key as any)}
//             style={[
//               styles.tabButton,
//               activeTab === tab.key && styles.activeTabButton,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === tab.key && styles.activeTabText,
//               ]}
//             >
//               {tab.label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* List */}
//       <FlatList
//         data={data[activeTab]}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.listContainer}
//         ListEmptyComponent={
//           <Text style={styles.emptyText}>No {activeTab} services found.</Text>
//         }
//       />
//     </SafeAreaView>
//   );
// };

// export default ServiceHistoryScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//   },
//   tabContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: Colors.BORDER_GREY,
//     marginHorizontal: matter.spacing.m,
//     marginTop: verticalScale(10),
//     borderRadius: moderateScale(30),
//     paddingVertical: verticalScale(5),
//   },
//   tabButton: {
//     flex: 1,
//     alignItems: "center",
//     paddingVertical: verticalScale(6),
//     borderRadius: moderateScale(20),
//   },
//   activeTabButton: {
//     backgroundColor: Colors.PRIMARY,
//   },
//   tabText: {
//     color: Colors.TEXT,
//     fontSize: matter.fontSize.sm,
//     fontWeight: "500",
//   },
//   activeTabText: {
//     color: Colors.WHITE,
//   },
//   listContainer: {
//     paddingHorizontal: matter.spacing.m,
//     paddingVertical: verticalScale(10),
//   },
//   card: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.WHITE,
//     borderRadius: moderateScale(12),
//     padding: matter.spacing.m,
//     marginBottom: verticalScale(10),
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   serviceTitle: {
//     fontSize: matter.fontSize.md,
//     fontWeight: "600",
//     color: Colors.TEXT,
//   },
//   serviceDate: {
//     fontSize: matter.fontSize.sm,
//     color: Colors.DARK_GRAY,
//     marginTop: 3,
//   },
//   emptyText: {
//     textAlign: "center",
//     color: Colors.DARK_GRAY,
//     fontSize: matter.fontSize.sm,
//     marginTop: verticalScale(20),
//   },
// });
