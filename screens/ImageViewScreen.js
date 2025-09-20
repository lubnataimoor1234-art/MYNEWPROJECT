
// import React from 'react';
// import { View, Image, StyleSheet, Dimensions } from 'react-native';

// const ImageViewScreen = ({ route }) => {
//   const { image } = route.params;

//   return (
//     <View style={styles.container}>
//       <Image source={image} style={styles.fullImage} resizeMode="contain" />
//     </View>
//   );
// };
// export default ImageViewScreen;
// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullImage: {
//     width,
//     height,
//   },
// });

import React, { useState } from 'react';
import { 
  View, 
  Image, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity, 
  Text,
  StatusBar,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ImageViewScreen({ route, navigation }) {
  const { image, imageIndex, allImages } = route.params;
  const [currentIndex, setCurrentIndex] = useState(imageIndex || 0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < allImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentImage = allImages[currentIndex];

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      {/* Header with close button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.counter}>
          {currentIndex + 1} / {allImages.length}
        </Text>
      </View>

      {/* Main image */}
      <ScrollView
        contentContainerStyle={styles.imageContainer}
        maximumZoomScale={3}
        minimumZoomScale={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: currentImage.uri }}
          style={styles.fullscreenImage}
          resizeMode="contain"
        />
      </ScrollView>

      {/* Navigation buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, currentIndex === 0 && styles.disabledButton]}
          onPress={goToPrevious}
          disabled={currentIndex === 0}
        >
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, currentIndex === allImages.length - 1 && styles.disabledButton]}
          onPress={goToNext}
          disabled={currentIndex === allImages.length - 1}
        >
          <Ionicons name="chevron-forward" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 1,
  },
  closeButton: {
    padding: 10,
  },
  counter: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: width,
    height: height * 0.8,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    padding: 10,
  },
  disabledButton: {
    opacity: 0.3,
  },
});