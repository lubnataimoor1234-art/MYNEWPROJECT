import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Menu, User, MapPin } from "lucide-react-native";
import Colors from "../../utils/colors.utils";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Map
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.7749, 
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}


      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn}>
          <Menu size={24} color={Colors.PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.title}>San Francisco</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <User size={24} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>

      
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.roadsideBtn}>
          <MapPin size={20} color={Colors.WHITE} />
          <Text style={styles.roadsideText}>Request Roadside Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 50,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: Colors.PRIMARY,
  },
  iconBtn: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: Colors.BORDER_GREY,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 30,
    left: 16,
    right: 16,
    alignItems: "center",
  },
  roadsideBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  roadsideText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});

export default HomeScreen;
