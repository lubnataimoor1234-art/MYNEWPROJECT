import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
//import MapView, { Marker } from "react-native-maps";
import {ArrowLeft }from "lucide-react-native";
import Colors from "../src/utils/colors.utils";
import { useNavigation } from "@react-navigation/native";

const ConfirmRequestScreen = () => {
      const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.WHITE} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm Request</Text>
        <View style={{ width: 24 }} /> 
      </View>
     

  

      <TextInput
        style={styles.input}
        placeholder="Add a description of your issue..."
        multiline
      />

      <TouchableOpacity style={styles.broadcastBtn}>
        <Text style={styles.broadcastText}>Broadcast Request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmRequestScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.WHITE,   },
 header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: "space-between",
  },
  backButton: { padding: 10 },
  headerTitle: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    padding: 30,
  },

  title: { fontSize: 18, fontWeight: "700", marginBottom: 30, color: Colors.TEXT },
  map: { width: "100%", height: 200, borderRadius: 20, marginBottom: 30 },
  input: {
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    borderRadius: 10,
    padding: 12,
    margin: 15,
    fontSize: 14,
    color: Colors.TEXT,
    minHeight: 80,
  },
   broadcastBtn: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 16,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
  },
  broadcastText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
