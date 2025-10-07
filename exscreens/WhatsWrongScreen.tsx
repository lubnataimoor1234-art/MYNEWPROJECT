import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BatteryCharging, CircleDot, Car, Fuel , ArrowLeft } from "lucide-react-native";
import Colors from "../src/utils/colors.utils";
import { useNavigation } from "@react-navigation/native";

const WhatsWrongScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.WHITE} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>What's wrong</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.grid}>
        <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate("ConfirmRequestScreen" as never)}
        >
          <CircleDot size={28} color={Colors.PRIMARY} />
          <Text style={styles.text}>Flat Tire</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate("ConfirmRequestScreen" as never)}
        >
          <BatteryCharging size={28} color={Colors.PRIMARY} />
          <Text style={styles.text}>Battery Jump-Start</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate("ConfirmRequestScreen" as never)}
        >
          <Car size={28} color={Colors.PRIMARY} />
          <Text style={styles.text}>Engine Trouble</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate("ConfirmRequestScreen" as never)}
        >
          <Fuel size={28} color={Colors.PRIMARY} />
          <Text style={styles.text}>Fuel Delivery</Text>
        </TouchableOpacity>
      </View>
 {/* ✅ Request Help Button */}
      <TouchableOpacity 
        style={styles.requestBtn}
        onPress={() => navigation.navigate("ConfirmRequest" as never)}
      >
        <Text style={styles.requestText}>Request Help</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.requestBtn}>
        <Text style={styles.requestText}>Request Help</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default WhatsWrongScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.WHITE, 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "space-between",
  },
  backButton: { padding: 5 },
  headerTitle: {
    padding: 30,
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginRight: 20,
  },
  grid: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    marginTop: 70,
  },
  box: {
    width: "48%",
    height: 120,
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
   paddingVertical: 16,
    marginHorizontal: 2,
  },
  text: { 
    marginTop: 10, 
    fontSize: 15, 
    fontWeight: "600", 
    color: Colors.TEXT 
  },
  requestBtn:{
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 16,
    marginHorizontal: 15,
    marginBottom: 40,
    borderRadius: 10,
    elevation: 3,
  },
  requestText: { 
    color: Colors.WHITE, 
    fontSize: 18, 
    fontWeight: "700", 
    textAlign: "center" 
  },
});
