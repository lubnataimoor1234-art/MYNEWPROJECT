import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Search, RefreshCcw, HelpCircle } from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
const IntroScreen = () => {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>  
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.WHITE} />
        </TouchableOpacity>
      {/* <Image
        source={require("../assets/png/image.png")} 
        style={styles.image}
        resizeMode="cover"
      /> */}

      {/* Title */}
      <Text style={styles.title}>On-Demand Bike Mechanics</Text>
      <Text style={styles.subtitle}>
        Bike broke down? Set your budget. Mechanics bid. You choose the best deal!
      </Text>

      {/* Options */}
      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => navigation.navigate("BikeRepairScreen" as never)}
      >
        <Search size={22} color={Colors.PRIMARY} />
        <View style={styles.optionTextBox}>
          <Text style={styles.optionTitle}>Post Your Request</Text>
          <Text style={styles.optionSubtitle}>
            Describe issue, location & set your budget
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => navigation.navigate("MechanicBidScreen" as never)}
      >
        <RefreshCcw size={22} color={Colors.PRIMARY} />
        <View style={styles.optionTextBox}>
          <Text style={styles.optionTitle}>Mechanics Bid</Text>
          <Text style={styles.optionSubtitle}>
            They accept your price or counter-bid
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => navigation.navigate("ChooseHelpScreen" as never)}
      >
        <HelpCircle size={22} color={Colors.PRIMARY} />
        <View style={styles.optionTextBox}>
          <Text style={styles.optionTitle}>Choose & Get Help</Text>
          <Text style={styles.optionSubtitle}>
            Pick best price & mechanic comes to you
          </Text>
        </View>
      </TouchableOpacity>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Skip */}
      <Text style={styles.skip}>Skip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
//   image: {
//     width: "100%",
//     height: 180,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.TEXT,
    textAlign: "center",
    marginBottom: 5,

  },backButton: { padding: 10 },
  subtitle: {
    fontSize: 14,
    color: Colors.BORDER_GREY,
    textAlign: "center",
    marginBottom: 20,
  },
  optionBox: {
    flexDirection: "row",
    backgroundColor: Colors.BORDER_GREY,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  optionTextBox: {
    marginLeft: 12,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.TEXT,
  },
  optionSubtitle: {
    fontSize: 13,
    color: Colors.DARK_GRAY,
  },
  startButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  startButtonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "600",
  },
  skip: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: Colors.WHITE,
  },
});

export default IntroScreen;
