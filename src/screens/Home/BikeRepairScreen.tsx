

import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MainHeader from "../../components/MainHeader";
import Colors from "../../utils/Colors.utils";
import matter from "../../utils/matter.utils";
import strings from "../../utils/strings.utils";

const BikeRepairScreen = () => {
  const navigation = useNavigation<any>();
   const [search, setSearch] = useState("");
  const {
    headerTitle,
    bannerTitle,
    bannerSubtitle,
    learnMore,
    sectionTitle,
    services,
  } = strings.bikeRepair;

  return (
    <ScrollView style={styles.container}>
      <MainHeader title={headerTitle}
       showSearch 
       onSearchChange={setSearch}
       showBack  />

      {/* Banner */}
      <View style={styles.bannerCard}>
        <Text style={styles.bannerTitle}>{bannerTitle}</Text>
        <Text style={styles.bannerSubtitle}>{bannerSubtitle}</Text>
        <TouchableOpacity>
          <Text style={styles.learnMore}>{learnMore}</Text>
        </TouchableOpacity>
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>

      {/* Services */}
      {services.map((services, index) => (
        <TouchableOpacity
          key={index}
          style={styles.serviceBox}
          onPress={() => navigation.navigate(services.route )}
        >
          {services.icon}
          <View style={styles.serviceTextBox}>
            <Text style={styles.serviceTitle}>{services.title}</Text>
            <Text style={styles.serviceDesc}>{services.desc}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default BikeRepairScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  bannerCard: {
    backgroundColor: Colors.YELLOW,
    padding: matter.spacing.m,
    borderRadius: matter.radius.lg,
    marginVertical: matter.spacing.m,
    marginHorizontal: matter.spacing.m,
  },
  bannerTitle: {
    fontSize: matter.fontSize.lg,
    fontWeight: "700",
    color: Colors.WHITE,
    marginBottom: 6,
  },
  bannerSubtitle: {
    fontSize: matter.fontSize.sm,
    color: Colors.WHITE,
    marginBottom: 10,
  },
  learnMore: {
    fontSize: matter.fontSize.sm,
    fontWeight: "600",
    color: Colors.WHITE,
    textDecorationLine: "underline",
  },
  sectionTitle: {
    fontSize: matter.fontSize.md,
    fontWeight: "700",
    color: Colors.TEXT,
    marginBottom: matter.spacing.m,
    paddingHorizontal: matter.spacing.m,
  },
  serviceBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: matter.spacing.m,
    marginHorizontal: matter.spacing.m,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    marginBottom: 12,
    elevation: 2,
  },
  serviceTextBox: {
    marginLeft: matter.spacing.s,
  },
  serviceTitle: {
    fontSize: matter.fontSize.sm,
    fontWeight: "600",
    color: Colors.TEXT,
  },
  serviceDesc: {
    fontSize: matter.fontSize.s,
    color: Colors.DARK_GRAY,
  },
});
