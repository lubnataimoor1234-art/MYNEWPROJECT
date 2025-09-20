import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const cardSize = width / 2 - 24;

const SalesData = ({ activeTab }) => {
  const salesData = [
    {id: "s1", title: "Total Sales", amount: 0, icon: "cash", trend: "up", change: 0},
    {id: "s2", title: "Total Payments", amount:0, icon: "card", trend: "up", change: 0},
    {id: "s3", title: "Material Sales", amount: 0, icon: "construct", trend: "down", change: 0},
    {id: "s4", title: "Readymade Sales", amount: 0, icon: "shirt", trend: "up", change:0},
  ];

  const formatCurrency = (amount) => {
    return `RS ${amount.toLocaleString('en-IN')}`;
  };

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
        {formatCurrency(item.amount)}
      </Text>
    </View>
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{activeTab} Sales Report</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={salesData}
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
    color: "#070707ff",
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
    color: "#666",
    marginBottom: 8,
    fontWeight: '500',
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
});

export default SalesData;