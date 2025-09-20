import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const cardSize = width / 2 - 24;

const OrdersData = ({ activeTab }) => {
  const ordersData = [
    {id: "o1", title: "Orders Received", amount: 0, icon: "download", trend: "up", change: 0},
    {id: "o2", title: "Orders Delivered", amount: 0, icon: "checkmark-done", trend: "up", change: 0},
    {id: "o3", title: "Orders Past Due", amount:0, icon: "alert-circle", trend: "down", change:0},
    {id: "o4", title: "Orders Upcoming", amount: 0, icon: "calendar", trend: "up", change: 0},
  ];

  const renderCard = ({item}) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, {backgroundColor: item.trend === "up" ? "#E8F5E9" : "#FFEBEE"}]}>
          <Ionicons 
            name={item.icon} 
            size={16} 
            color={item.trend === "up" ? "#2E7D32" : "#D32F2F"} 
          />
        </View>
        <View style={styles.trendContainer}>
          <Ionicons 
            name={item.trend === "up" ? "trending-up" : "trending-down"} 
            size={14} 
            color={item.trend === "up" ? "#2E7D32" : "#D32F2F"} 
          />
          <Text style={[styles.trendText, {color: item.trend === "up" ? "#2E7D32" : "#D32F2F"}]}>
            {item.change}%
          </Text>
        </View>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardAmount}>
        {item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{activeTab} Orders Report</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ordersData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  viewAllText: {
    fontSize: 14,
    color: "#0d0d0eff",
    fontWeight: "500",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#fff",
    width: cardSize,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  cardTitle: {
    fontSize: 14,
    color: "#4d4c4cff",
    marginBottom: 8,
    fontWeight: '500',
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
});

export default OrdersData;