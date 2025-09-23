import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Car, BatteryCharging, Wrench, Fuel, Truck } from "lucide-react-native";
import Colors from "../../utils/Colors.utils";
import matter from "../../utils/matter.utils";
import MainHeader from "../../components/MainHeader";

const EmergencyService = () => {
  const services = [
    { id: 1, title: "Flat Tyre", icon: <Car size={28} color={Colors.PRIMARY} /> },
    { id: 2, title: "Break Down", icon: <Truck size={28} color={Colors.PRIMARY} /> },
    { id: 3, title: "Desert Pullout", icon: <Car size={28} color={Colors.PRIMARY} /> },
    { id: 4, title: "Basement Pullout", icon: <Wrench size={28} color={Colors.PRIMARY} /> },
    { id: 5, title: "Battery Jumpstart", icon: <BatteryCharging size={28} color={Colors.PRIMARY} /> },
    { id: 6, title: "Fuel Refill", icon: <Fuel size={28} color={Colors.PRIMARY} /> },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <MainHeader title="Emergency Services"
        subtitle=" When you suddenly find yourself stuck in the middle of nowhere , call us!" 
        showBack 
      showMap
         />
       
        <Image
  source={require("../../assets/pngs/car2.jpg")}
  style={styles.headerImage}
/>

      </View>

      <View style={styles.servicesContainer}>
        {services.map((item) => (
          <View key={item.id} style={styles.serviceBox}>
            {item.icon}
            <Text style={styles.serviceTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default EmergencyService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BORDER_GREY,
  },
  headerSection: {
    backgroundColor: Colors.PRIMARY,
    paddingBottom: matter.spacing.xl,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  subtitle: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.sm,
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  headerImage: {
    width: 200,
    height: 120,
    resizeMode: "contain",
    marginTop: 10,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: matter.spacing.xl,
    paddingHorizontal: matter.spacing.m,
  },
  serviceBox: {
    width: "30%",
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  serviceTitle: {
    fontSize: matter.fontSize.s,
    color: Colors.TEXT,
    marginTop: 8,
    textAlign: "center",
  },
});
