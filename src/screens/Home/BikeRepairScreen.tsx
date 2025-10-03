import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MapPin, User, Wrench, Battery, Fuel, Settings, Bike, ArrowLeft } from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import { useNavigation } from "@react-navigation/native";
const BikeTroubleScreen = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.headerCard}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.WHITE} />
        </TouchableOpacity>
        <View>
           
          <Text style={styles.locationLabel}>Your Location</Text>
          <View style={styles.locationRow}>
            <MapPin size={18} color={Colors.WHITE} />
            <Text style={styles.locationText}>123 Main Street, Downtown</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <User size={20} color={Colors.WHITE}  />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Bike Trouble?</Text>
      <Text style={styles.subtitle}>Get a mechanic in minutes</Text>

      {/* Banner Card */}
      <View style={styles.bannerCard}>
        <Text style={styles.bannerTitle}>💰 Set Your Price, Get Bids!</Text>
        <Text style={styles.bannerSubtitle}>
          Choose service → Set your budget → Mechanics accept or counter-bid → You pick the best deal!
        </Text>
        <TouchableOpacity>
          <Text style={styles.learnMore}>Learn more →</Text>
        </TouchableOpacity>
      </View>

      {/* Service Options */}
      <Text style={styles.sectionTitle}>Select a Service</Text>

      <View style={styles.serviceBox}>
        <Wrench size={22} color={Colors.PRIMARY} />
        <View style={styles.serviceTextBox}>
          <Text style={styles.serviceTitle}>Bike Puncture</Text>
          <Text style={styles.serviceDesc}>Flat tire repair or tube replacement</Text>
        </View>
      </View>

      <View style={styles.serviceBox}>
        <Battery size={22} color={Colors.PRIMARY} />
        <View style={styles.serviceTextBox}>
          <Text style={styles.serviceTitle}>Battery Issues</Text>
          <Text style={styles.serviceDesc}>Jump start or battery replacement</Text>
        </View>
      </View>

      <View style={styles.serviceBox}>
        <Wrench size={22} color={Colors.PRIMARY} />
        <View style={styles.serviceTextBox}>
          <Text style={styles.serviceTitle}>Engine Breakdown</Text>
          <Text style={styles.serviceDesc}>On-site engine diagnosis and repair</Text>
        </View>
      </View>

      <View style={styles.serviceBox}>
        <Fuel size={22} color={Colors.PRIMARY} />
        <View style={styles.serviceTextBox}>
          <Text style={styles.serviceTitle}>Fuel Delivery</Text>
          <Text style={styles.serviceDesc}>Emergency fuel delivery service</Text>
        </View>
      </View>

      <View style={styles.serviceBox}>
        <Settings size={22} color={Colors.PRIMARY} />
        <View style={styles.serviceTextBox}>
          <Text style={styles.serviceTitle}>General Service</Text>
          <Text style={styles.serviceDesc}>Oil change, chain service, general maintenance</Text>
        </View>
      </View>

      <View style={styles.serviceBox}>
        <Bike size={22} color={Colors.PRIMARY} />
        <View style={styles.serviceTextBox}>
          <Text style={styles.serviceTitle}>Bike Towing</Text>
          <Text style={styles.serviceDesc}>Towing to nearest garage</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BikeTroubleScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.WHITE, paddingHorizontal: 1 },

  headerCard: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 12,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 60,
    marginBottom: 20,
  },
  locationLabel: { fontSize: 20, color: Colors.WHITE, marginBottom: 4 },
  locationRow: { flexDirection: "row" },
  locationText: { fontSize: 14, color: Colors.WHITE, marginLeft: 5 },
  profileIcon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    padding: 10,
    left: 20,
  },backButton: { padding: 10 , right: 35 },

  title: { fontSize: 22, fontWeight: "700", color: Colors.TEXT, marginTop: 5 ,paddingHorizontal: 15},
  subtitle: { fontSize: 14, color: Colors.DARK_GRAY, marginBottom: 20, paddingHorizontal: 20 },

  bannerCard: {
    backgroundColor:Colors.YELLOW ,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 20
  },
  bannerTitle: 
  { fontSize: 16, fontWeight: "700", color: Colors.WHITE, marginBottom: 6,  },
  bannerSubtitle: 
  { fontSize: 13, color: Colors.WHITE, marginBottom: 10 },
  learnMore: 
  { fontSize: 13, fontWeight: "600", color: Colors.WHITE, textDecorationLine: "underline" },

  sectionTitle: 
  { fontSize: 16, fontWeight: "700", color: Colors.TEXT, marginBottom: 10,paddingHorizontal: 20 },

  serviceBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
   
  },
  serviceTextBox: { marginLeft: 12 , paddingHorizontal: 20},
  serviceTitle: { fontSize: 15, fontWeight: "600", color: Colors.TEXT },
  serviceDesc: { fontSize: 12, color: Colors.DARK_GRAY },
});
