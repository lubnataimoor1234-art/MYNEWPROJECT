
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MapPin, DollarSign, Clock } from "lucide-react-native";
import Colors from "../../utils/Colors.utils";
import matter from "../../utils/matter.utils";
import MainHeader from "../../components/MainHeader";

const RequestMechanic = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { service, desc } = route.params || {};

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  
  const handleFindMechanics = () => {
    if (!location.trim() || !description.trim() || !budget.trim()) {
      Alert.alert("Incomplete Details", "Please fill all fields before continuing.");
      return;
    }

    navigation.navigate("MechanicBidScreen", {
      service,
      desc,
      location,
      description,
      budget,
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MainHeader
        title="Request a Mechanic"
        subtitle="Tell us your issue and set your budget"
        showBack
      />


       <View style={styles.section}>
        <Text style={styles.label}>Selected Service</Text>

        <View style={styles.selectedServiceCard}>
          <View style={styles.selectedServiceLeft}>
            <View style={styles.circleOutline}>
              <View style={styles.circleInner} />
            </View>
          </View>

          <View style={styles.selectedServiceText}>
            <Text style={styles.serviceTitle}>{service || "Bike Puncture"}</Text>
            <Text style={styles.serviceDesc}>
              {desc || "Flat tire repair or tube replacement"}
            </Text>
          </View>
        </View>
      </View>

      {/* Location */}
      <View style={styles.section}>
        <Text style={styles.label}>Your Location</Text>
        <View style={styles.inputContainer}>
          <MapPin size={18} color={Colors.PRIMARY} />
          <TextInput
            placeholder="123 Main Street, Downtown"
            placeholderTextColor={Colors.DARK_GRAY}
            value={location}
            onChangeText={setLocation}
            style={styles.input}
          />
        </View>
      </View>

      {/* Problem Description */}
      <View style={styles.section}>
        <Text style={styles.label}>Problem Description</Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="E.g., Front tire is punctured, need urgent help..."
          placeholderTextColor={Colors.DARK_GRAY}
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </View>
      </View>

      {/* Budget */}
      
      <View style={styles.section}>
        <Text style={styles.label}>Your Budget / Expected Price</Text>
        <View style={styles.inputContainer}>
          <DollarSign size={18} color={Colors.PRIMARY} />
          <TextInput
            placeholder="$ 50"
            placeholderTextColor={Colors.DARK_GRAY}
            keyboardType="numeric"
            value={budget}
            onChangeText={setBudget}
            style={styles.input}
          />
        </View>
        <Text style={styles.hint}>
          💡 Mechanics can accept your price or counter-bid. You choose the best
          offer!
        </Text>
      </View>

      {/* How BikeFix Works */}
    
      <View style={styles.infoCard}>
        <View style={styles.infoHeader}>
          <Clock size={20} color={Colors.PRIMARY} />
          <Text style={styles.infoTitle}>How Bike Fix Works</Text>
        </View>

        {[
          "Submit request with your budget price",
          "Mechanics accept or counter-bid your price",
          "Review all bids and negotiate if needed",
          "Select best deal & mechanic comes to you",
        ].map((step, index) => (
          <View key={index} style={styles.stepRow}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
            </View>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </View>
      

      {/* Find Mechanics Button */}
      <TouchableOpacity style={styles.button} onPress={handleFindMechanics}>
        <Text style={styles.buttonText}>Find Mechanics</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RequestMechanic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  section: {
    marginHorizontal: matter.spacing.m,
    marginBottom: matter.spacing.m,
  },
  label: {
    fontSize: matter.fontSize.md,
    color: Colors.TEXT,
    fontWeight: "700",
    marginBottom: 6,
    marginTop:6,
    
  },
  selectedService: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    padding: 12,
    borderRadius: 10,
    marginTop:10,
  },
  iconWrap: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: Colors.BORDER_GREY,
  alignItems: "center",
  justifyContent: "center",
  marginRight: 12,
},

  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    marginRight: 10,
  },
  serviceTitle: {
    fontSize: matter.fontSize.md,
    fontWeight: "600",
    color: Colors.TEXT,
  },
  serviceDesc: {
    fontSize: matter.fontSize.sm,
    color: Colors.DARK_GRAY,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
  },
  input: {
    flex: 1,
    fontSize: matter.fontSize.sm,
    color: Colors.TEXT,
    paddingVertical: 10,
    marginLeft: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  hint: {
    fontSize: matter.fontSize.sm,
    color: Colors.DARK_GRAY,
    marginTop: 6,
  },
  infoCard: {
    backgroundColor: Colors.BORDER_GREY,
    padding: matter.spacing.m,
    borderRadius: 12,
    marginHorizontal: matter.spacing.m,
    marginBottom: matter.spacing.m,
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: matter.fontSize.md,
    color: Colors.TEXT,
    fontWeight: "700",
    marginLeft: 8,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 4,
  },
  stepCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  stepNumber: {
    color: Colors.WHITE,
    fontWeight: "700",
    fontSize: 12,
  },
  stepText: {
    flex: 1,
    fontSize: matter.fontSize.sm,
    color: Colors.TEXT,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    marginHorizontal: matter.spacing.m,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: matter.spacing.xl,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: matter.fontSize.md,
    fontWeight: "700",
  },
  selectedServiceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.BORDER_GREY, 
    borderRadius: 12,
    padding: 14,
  },
  selectedServiceLeft: {
    marginRight: 12,
  },
  circleOutline: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  circleInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.PRIMARY,
  },
  selectedServiceText: {
    fontSize: matter.fontSize.sm,
    flex: 1,
  },
});
