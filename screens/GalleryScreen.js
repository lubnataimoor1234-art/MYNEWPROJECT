import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from "react-native";

const data = [
  { id: "1", title: "Item 1", image: require("../assets/gallery/image1.jpeg") },
  { id: "2", title: "Item 2", image: require("../assets/gallery/image2.jpeg") },
  { id: "3", title: "Item 3", image: require("../assets/gallery/image3.jpeg") },
  { id: "4", title: "Item 4", image: require("../assets/gallery/image4.jpeg") },
  { id: "5", title: "Item 5", image: require("../assets/gallery/image5.jpg") },
];

const GalleryScreen = () => {
  const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
  );

  return (
      <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.list}
            columnWrapperStyle={styles.row}
        />
      </View>
  );
};

export default GalleryScreen;

const { width } = Dimensions.get("window");
const cardSize = width / 2 - 30; // subtract padding + gap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: 16,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    width: cardSize,
    padding: 10,

    // Shadows
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#a9a9a9",
  },
  image: {
    width: "100%",
    height: 150,
  },
});
