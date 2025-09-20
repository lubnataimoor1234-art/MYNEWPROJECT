
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import MainHeader from "../components/MainHeader";
import MenuItems from "../components/MenuItems"; 

const salesData = [
  { id: "s1", title: "Total Sales", amount: 0 },
  { id: "s2", title: "Total Payments", amount: 0 },
  { id: "s3", title: "Material Sales", amount: 0 },
  { id: "s4", title: "Readymade Sales", amount: 0 },
];

const ordersData = [
  { id: "o1", title: "Orders Received", amount: 0 },
  { id: "o2", title: "Orders Delivered", amount: 0 },
  { id: "o3", title: "Orders Past Due", amount: 0 },
  { id: "o4", title: "Orders Upcoming", amount: 0 },
];

const tabs = ["Daily", "Weekly", "Monthly"];
const dailySalesByType = { title: "Total Sales", amount: 0 };

const ReportsScreen = () => {
  const [activeTab, setActiveTab] = useState("Daily");
  const [activeMenu, setActiveMenu] = useState("Bill");
  const navigation = useNavigation();

  const handleMenuPress = (item) => {
    setActiveMenu(item.name);
    if (item.screenName !== "ReportsScreen") {
      navigation.navigate(item.screenName);
    }
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardAmount}>Rs{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <MainHeader title="Reports" />

      {/* ✅ Add Menu Tabs */}
      <MenuItems activeMenu={activeMenu} onMenuPress={handleMenuPress} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.tabsWrapper}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.dateText}>Date : Sept 7, 2025 ✎</Text>

        <Text style={styles.sectionTitle}>{activeTab} Sales Report</Text>
        <FlatList
          data={salesData}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          scrollEnabled={false}
        />

        <Text style={styles.sectionTitle}>{activeTab} Orders Report</Text>
        <FlatList
          data={ordersData}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          scrollEnabled={false}
        />

        <View style={styles.dailyCard}>
          <Text style={styles.dailyCardTitle}>Daily Sales by Type</Text>
          <View style={styles.dailyCardBody}>
            <Text style={styles.salesText}>
              {dailySalesByType.title} <Text style={{ fontWeight: "bold" }}>Rs{dailySalesByType.amount}</Text>
            </Text>
          </View>
        </View>
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

export default ReportsScreen;


const { width } = Dimensions.get("window");
const cardSize = width / 2 - 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  contentContainer: {
    padding: 16,
  },
  tabsWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 6,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 10,
    backgroundColor: "#f8fafc",
    alignItems: "center",
  },
  activeTabButton: {
    backgroundColor: "#000",
  },
  tabText: {
    fontSize: 14,
    color: "#1f2937",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "600",
  },
  dateText: {
    fontSize: 14,
    color: "#444",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "#333",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#fff",
    width: cardSize,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 6,
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  dailyCard: {
    marginTop: 20,
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    padding: 12,
  },
  dailyCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 8,
  },
  dailyCardBody: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    minHeight: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  salesText: {
    fontSize: 16,
    color: "#000",
  },
});
