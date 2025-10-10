
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { ArrowLeft, MapPin } from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/CustomHeader";
import matter from "../../utils/matter.utils";
const mechanicsData = [
  {
    id: "1",
    name: "Charlie",
    verified: true,
    rating: 4.8,
    jobs: 287,
    distance: "3.1 km",
    time: "Arrives in 20 min",
    offer: 40,
    originalBudget: 50,
    type: "Lower Counter-Bid",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "2",
    name: "Jack ",
    verified: false,
    rating: 4.7,
    jobs: 192,
    distance: "4.2 km",
    time: "Arrives in 25 min",
    offer: 50,
    originalBudget: 50,
    type: "Accepted Price",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const MechanicsBidScreen = () => {
  const navigation = useNavigation();
   const [search, setSearch] = useState("");

  const renderMechanic = ({ item }: any) => (
    <View style={styles.card}>
      {/* Mechanic Info */}
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            {item.verified && <Text style={styles.verified}>Verified</Text>}
          </View>
          <Text style={styles.rating}>
            ⭐ {item.rating} · {item.jobs} jobs
          </Text>
          <Text style={styles.distance}>
            <MapPin size={14} color={Colors.DARK_GRAY} /> {item.distance} · {item.time}
          </Text>
          <Text style={styles.tag}>
            {item.type}
          </Text>
        </View>
      </View>

      {/* Price and Button */}
      <View style={styles.rowBetween}>
        <View>
          {item.offer < item.originalBudget && (
            <Text style={styles.strike}>Your budget ${item.originalBudget}</Text>
          )}
          <Text style={styles.price}>${item.offer}</Text>
        </View>
        <TouchableOpacity style={item.offer === item.originalBudget ? styles.acceptBtnGreen : styles.acceptBtnBlue}>
          <Text style={styles.acceptText}>Accept Bid</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
       <CustomHeader title = "Machanic Bid" 
       showSearch 
       onSearchChange={setSearch} 
       showProfile />
 <View style={styles.content}>
        <Text style={styles.text}>Search query: {search}</Text>

      {/* Budget Info */}
      
      <View style={styles.budgetCard}>
        <Text style={styles.budgetText}>Your Budget: $50</Text>
        <Text style={styles.budgetNote}>
          Green badges = Accepted your price · Orange = Higher price · Negotiate or choose!
        </Text>
      </View>

      {/* Mechanic List */}
      <FlatList
        data={mechanicsData}
        renderItem={renderMechanic}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.WHITE,
     },
      content: {
    flex: 1,
    paddingHorizontal: matter.spacing.m, 
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    color: Colors.TEXT,
    marginBottom:10,
    fontWeight: "800",
  },
  
  budgetCard: {
    backgroundColor: Colors.YELLOW,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal:matter.spacing.l,
  },
  budgetText: { fontSize: 16, fontWeight: "600", color: Colors.TEXT },
  budgetNote: { fontSize: 12, color: Colors.TEXT, marginTop: 5 },
  card: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: Colors.TEXT,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
      paddingHorizontal:matter.spacing.m,
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 16, fontWeight: "600", color: Colors.TEXT },
  verified: {
    fontSize: 12,
    color: Colors.PRIMARY,
    fontWeight: "600",
    marginLeft: 8,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  rating: { fontSize: 13, color: Colors.TEXT ,  paddingHorizontal:matter.spacing.m,},
  distance: { fontSize: 12, color: Colors.TEXT, marginTop: 6,  paddingHorizontal:matter.spacing.m, },
  tag: {
    fontSize: 12,
    color: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 6,
    borderRadius: 5,
    marginTop: 5,
  },
  strike: { fontSize: 12, color: Colors.TEXT, textDecorationLine: "line-through" },
  price: { fontSize: 18, fontWeight: "700", color: Colors.TEXT },
  acceptBtnGreen: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  acceptBtnBlue: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  acceptText: { color: Colors.WHITE, fontWeight: "600" },
});

export default MechanicsBidScreen;
