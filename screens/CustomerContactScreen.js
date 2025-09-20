import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomContactScreen({ navigation }) {
  const handleSelectContact = async () => {
    navigation.navigate("AddCustomer", { fromContact: true });
  };

  const handleAddCustomer = () => {
    navigation.navigate("AddCustomer");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSelectContact}>
        <Text style={styles.text}>📞 Select a Phone Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAddCustomer}>
        <Text style={styles.text}>➕ Add Customer Manually</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  button: {
    backgroundColor: "#000",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  text: { color: "#fff", fontSize: 16 },
});
