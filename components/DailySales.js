import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DailySales = () => {
  const dailySalesByType = {id: "d1", title: "Total Sales", amount: 0, trend: "up", change: 0};

  const formatCurrency = (amount) => {
    return `RS ${amount.toLocaleString('en-IN')}`;
  };

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Daily Sales by Type</Text>
      </View>
      <View style={styles.dailyCard}>
        <View style={styles.dailyCardHeader}>
          <View style={[styles.iconContainer, {backgroundColor: "#EDE7F6"}]}>
            <Ionicons name="stats-chart" size={20} color="#0a0a0aff" />
          </View>
          <Text style={styles.dailyCardTitle}>{dailySalesByType.title}</Text>
        </View>
        <Text style={styles.dailyCardAmount}>{formatCurrency(dailySalesByType.amount)}</Text>
        <View style={styles.trendContainer}>
          <Ionicons 
            name={dailySalesByType.trend === "up" ? "trending-up" : "trending-down"} 
            size={14} 
            color={dailySalesByType.trend === "up" ? "#2E7D32" : "#D32F2F"} 
          />
          <Text style={[styles.trendText, {color: dailySalesByType.trend === "up" ? "#2E7D32" : "#D32F2F"}]}>
            {dailySalesByType.change}% from yesterday
          </Text>
        </View>
      </View>
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
  dailyCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  dailyCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dailyCardTitle: {
    fontSize: 16,
    color: "#666",
    marginLeft: 12,
    fontWeight: '500',
  },
  dailyCardAmount: {
    fontSize: 32,
    fontWeight: "700",
    color: "#080808ff",
    marginBottom: 8,
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
});

export default DailySales;