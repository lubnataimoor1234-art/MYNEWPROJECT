
import React, {useState}from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {
  MapPin,
  User,
  Wrench,
  Battery,
  Fuel,
  Settings,
  Bike,
  ArrowLeft,
} from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import strings from "../../utils/strings.utils";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/CustomHeader";
const BikeRepairScreen = () => {
  const navigation = useNavigation();
const [search, setSearch] = useState("");
  return (
    <ScrollView style={styles.container}>
    
      <CustomHeader title="Bike Repair" showSearch 
       onSearchChange={setSearch} 
        showProfile
        showBack
      />
      {/* Banner */}
      <View style={styles.bannerCard}>
        <Text style={styles.bannerTitle}>{strings.bikeTrouble.bannerTitle}</Text>
        <Text style={styles.bannerSubtitle}>{strings.bikeTrouble.bannerSubtitle}</Text>
        <TouchableOpacity>
          <Text style={styles.learnMore}>{strings.common.learnMore}</Text>
        </TouchableOpacity>
      </View>

      {/* Section */}
      <Text style={styles.sectionTitle}>{strings.bikeTrouble.sectionTitle}</Text>

      {/* Services */}
      {strings.bikeTrouble.services.map((service, index) => (
        <View key={index} style={styles.serviceBox}>
          {/* {service.icon} */}
          <View style={styles.serviceTextBox}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDesc}>{service.desc}</Text>
          </View>
        </View>
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
    padding: matter.spacing.s,
    borderRadius: matter.radius.lg,
    marginBottom: matter.spacing.m,
    marginTop:matter.spacing.m,
  },
  bannerTitle: {
    fontSize: matter.fontSize.md,
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
    paddingHorizontal: matter.padding.screen,
    
  },

  serviceBox: {
      width: "100%",
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: "center",
     flexDirection: "row",      
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    elevation: 2,
    paddingHorizontal: matter.padding.screen,
  },
  serviceTextBox: { marginLeft: matter.spacing.s },
  serviceTitle: {
    fontSize: matter.fontSize.md,
    fontWeight: "600",
    color: Colors.TEXT,
     paddingHorizontal: 16,
  },
  serviceDesc: { fontSize: matter.fontSize.sm, color: Colors.DARK_GRAY , paddingHorizontal: 16, },
});
