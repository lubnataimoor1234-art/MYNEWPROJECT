
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Car,
  BatteryCharging,
  Wrench,
  Gauge,
  SprayCan,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors.utils";
import matter from "../../utils/matter.utils";
import MainHeader from "../../components/MainHeader";
import { moderateScale, verticalScale } from "react-native-size-matters";

const DoorServices = () => {
  const navigation = useNavigation();

  const services = [
    { id: 1, icon: <Car size={26} color={Colors.PRIMARY} />, title: "Tyre Change" },
    { id: 2, icon: <BatteryCharging size={26} color={Colors.PRIMARY} />, title: "Battery Change" },
    { id: 3, icon: <Wrench size={26} color={Colors.PRIMARY} />, title: "Oil Change" },
    { id: 4, icon: <Gauge size={26} color={Colors.PRIMARY} />, title: "AC Service"},
    { id: 5, icon: <SprayCan size={26} color={Colors.PRIMARY} />, title: "Car Wash"},
     { id: 6, icon: <Car size={26} color={Colors.PRIMARY} />, title: "Engin Breakdown" },
  ];

  return (
    <ScrollView style={styles.container}>
      <MainHeader
        title="Door Step Service"
       // subtitle="Get quotes from nearby garages & doorstep repair service within 60 mints."
        showBack
        //showMap
      />

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

export default DoorServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BORDER_GREY,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: matter.spacing.l,
    marginTop: verticalScale(15),
  },
  serviceBox: {
    width: "30%",
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    alignItems: "center",
    paddingVertical: verticalScale(12),
    marginBottom: verticalScale(15),
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  serviceTitle: {
    fontSize: matter.fontSize.sm,
    color: Colors.TEXT,
    marginTop: verticalScale(8),
    fontWeight: '400', 
    textAlign: "center",
  },
  badge: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 5,
  },
  badgeText: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.s,
  },
});

