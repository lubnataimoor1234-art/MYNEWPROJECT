
import React,{ useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors.utils";
import { Car, Bike, Truck, Zap,  MoveRight, } from "lucide-react-native";

import MainHeader from "../../components/MainHeader";
import matter from "../../utils/matter.utils";
import strings from "../../utils/strings.utils";

const ServiceProvider = () => {
  const navigation = useNavigation();
const [search, setSearch] = useState("");
  return (
   <View  style={styles.container}>
    <MainHeader
        title="Service Provider"
        showSearch 
        onSearchChange={setSearch} 
        
        showBack
      />
          <Text style={styles.title}>{strings.bikeRepair.headerTitle}</Text>
          <Text style={styles.subtitle}>{strings.bikeRepair.sectionTitle}</Text>
          <ScrollView contentContainerStyle={{ paddingBottom: matter.spacing.l }}>

        <View style={styles.cardContainer}>
      
          <View style={styles.servicesContainer}>
            <TouchableOpacity
              style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
              {/* <Car size={20} color={Colors.PRIMARY} /> */}
              <Text style={styles.serviceText}>🚗 Car Repair</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
              {/* <Bike size={20} color={Colors.PRIMARY} /> */}
              <Text style={styles.serviceText}>🏍️ Bike Repair</Text>
            </TouchableOpacity>
  
            <TouchableOpacity  style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
              {/* <Truck size={20} color={Colors.PRIMARY} /> */}
              <Text style={styles.serviceText}> 🚚 Pickup Trucks</Text>
            </TouchableOpacity>

           <TouchableOpacity  style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
    {/* <Bike size={24} color={Colors.PRIMARY} /> */}
    <Text style={styles.serviceText}>🛵 Scooter</Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
    {/* <Truck size={24} color={Colors.PRIMARY} /> */}
    <Text style={styles.serviceText}>🚛 Lorry</Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
    {/* <MoveRight size={24} color={Colors.PRIMARY} /> */}
    <Text style={styles.serviceText}>🛺 Rickshaw</Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.serviceBox}
              onPress={() => navigation.navigate("bikeHome" as never)}
            >
    {/* <Car size={24} color={Colors.PRIMARY} /> */}
    <Text style={styles.serviceText}>🚘 Mini Car</Text>
  </TouchableOpacity>
  </View>
        
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceProvider;

const styles = StyleSheet.create({
 
  container: {
    flex: 1, 
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: matter.padding.buttonV,
  },
  title: {
    fontSize: matter.fontSize.lg,
    fontWeight: "900",
    color: Colors.WHITE,
    textAlign: "center",
    marginBottom: matter.spacing.s,
   paddingHorizontal: matter.padding.screen,
  },
  subtitle: {
    fontSize: matter.fontSize.sm,
    color: Colors.WHITE,
    textAlign: "center",
   marginBottom: matter.spacing.l,
   paddingHorizontal: matter.padding.screen,
  },
  cardContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: matter.radius.lg * 2,
    borderTopRightRadius: matter.radius.lg * 2,
    paddingVertical: matter.spacing.l,
    paddingHorizontal: matter.padding.screen,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    
    
  },
  servicesContainer: {
    flexDirection: "column",
  },
  serviceBox: {
    width: "100%",
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    paddingVertical: matter.padding.buttonV,
    paddingHorizontal: matter.padding.buttonH,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: matter.spacing.m,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY, 
    elevation: 2,
 
  },
  serviceText: {
    marginLeft: matter.spacing.s,
    fontSize: matter.fontSize.sm,
    fontWeight: "500",
    color: Colors.TEXT,
  },
});

