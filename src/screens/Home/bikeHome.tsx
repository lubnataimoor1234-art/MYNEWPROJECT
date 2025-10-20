import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Search, RefreshCcw, HelpCircle } from "lucide-react-native";
import Colors from "../../utils/Colors.utils";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import matter from "../../utils/matter.utils";
import strings from "../../utils/strings.utils";
import AppButton from "../../components/AppButton";
const BikeScreen = () => {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}> 
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.WHITE} />
        </TouchableOpacity>
         <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/pngs/image1.png")} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>On-Demand Bike</Text>
         <Text style={styles.title2}>Mechanics </Text>
    
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

       <AppButton
        title={strings.bikeHome.btn}
        onPress={() => navigation.navigate("BikeRepairScreen" as never)}
        type="primary"
      />
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  imageContainer: {
    
    alignItems: "center",
    justifyContent: "flex-start",
  backgroundColor: Colors.DARK_GRAY,
    
  },
  image: {
    width: 300,
    height: 300
    //borderRadius: 10,
    //marginBottom: 20,
  },

  title: {
    marginTop:15,
    fontSize: 25,
    fontWeight: "700",
    color: Colors.TEXT,
    textAlign: "center",
  },
  title2:
   {
    fontSize: 25,
    fontWeight: "700",
    color: Colors.TEXT,
    textAlign: "center",
    marginBottom: 10,

  },
  backButton: { padding: 10 },
  subtitle: {
    fontSize: 14,
    color: Colors.DARK_GRAY,
    textAlign: "center",
    marginBottom: 10,
  },
  optionBox: {
     flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: matter.spacing.m,
    marginHorizontal: matter.spacing.m,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    marginBottom: 12,
    elevation: 2,
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
});

export default BikeScreen;
