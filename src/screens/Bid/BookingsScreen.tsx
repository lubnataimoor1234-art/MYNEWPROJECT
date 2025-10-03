import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Car, Bike, Zap, ArrowLeft } from "lucide-react-native";
import Colors from "../../utils/colors.utils";

const BookingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={26} color={Colors.PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking</Text>
        <View style={{ width: 26 }} /> 
      </View>
      <TextInput
        placeholder="Pick-up location"
        placeholderTextColor={Colors.DARK_GRAY}
        style={styles.input}
      />

      <TextInput
        placeholder="Drop-off location"
        placeholderTextColor={Colors.DARK_GRAY}
        style={styles.input}
      />
<Text style={styles.Title}>Select Your Vehicle</Text>
  
      <TouchableOpacity style={styles.option}>
        <Car size={28} color={Colors.PRIMARY} />
        <Text style={styles.optionText}>Car Repair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Bike size={28} color={Colors.PRIMARY} />
        <Text style={styles.optionText}>Bike Repair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Zap size={28} color={Colors.PRIMARY} />
        <Text style={styles.optionText}>Emergency Help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    paddingTop: 70,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.PRIMARY,
  },
  input: {
    backgroundColor: Colors.BORDER_GREY,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.PRIMARY,
    marginBottom: 30,
  },
  Title:{
    fontSize: 15,
    marginBottom: 20,
      fontWeight: "bold",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.BORDER_GREY,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  optionText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "500",
    color: Colors.PRIMARY,
  },
});

export default BookingScreen;
