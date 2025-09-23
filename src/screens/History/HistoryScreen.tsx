
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Star } from "lucide-react-native";
import { ScaledSheet, s, ms } from "react-native-size-matters";
import { useTranslation } from "react-i18next";

import Colors from "../../utils/Colors.utils";
import ScreenWrapper from "../../components/ScreenWrapper";
import MainHeader from "../../components/MainHeader";
import { activeData, pendingData, completedData } from "../../DATA/HistoryData";

const HistoryScreen = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"active" | "pending" | "completed">("active");

  const getTabData = () => {
    if (activeTab === "active") return activeData;
    if (activeTab === "pending") return pendingData;
    return completedData;
  };

  const renderCards = () => {
    const data = getTabData() || [];
    return data.map((item) => (
      <View key={item.id} style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.serviceName}>{t(item.service)}</Text>
        </View>

        <Text style={styles.mechanicName}>{item.mechanic}</Text>
        <Text style={styles.date}>{item.date}</Text>

        <View style={styles.footerRow}>
          <View style={styles.ratingRow}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} color={Colors.YELLOW}  fill={Colors.YELLOW} />
            ))}
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    ));
  };

  return (
    <ScreenWrapper
      header={<MainHeader title={t("history")} showBell showBack />}
    >
      <View style={styles.tabContainer}>
        {["active", "pending", "completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab as any)}
          >
            <Text
              style={[styles.tabText, activeTab === tab && styles.activeTabText]}
            >
              {t(tab)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderCards()}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HistoryScreen;

const styles = ScaledSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.WHITE,
    marginTop: s(15),
    borderRadius: s(12),
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    padding: s(8),
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: s(8),
    borderRadius: s(8),
  },
  activeTab: {
    backgroundColor: Colors.PRIMARY,
  },
  tabText: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.TEXT,
  },
  activeTabText: {
    color: Colors.WHITE,
  },
  scrollContent: {
    paddingTop: s(15),
    paddingBottom: s(25),
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: s(12),
    padding: s(15),
    marginBottom: s(12),
    shadowColor: Colors.TEXT,
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
    fontSize: 15,
    fontWeight: "700",
    color: Colors.TEXT,
  },
  mechanicName: {
    fontSize: 13,
    color: Colors.TEXT,
    marginTop: 3,
  },
  date: {
    fontSize: 13,
    color: Colors.DARK_GRAY,
    marginTop: 2,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: s(8),
  },
  ratingRow: {
    flexDirection: "row",
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.PRIMARY,
  },
});
