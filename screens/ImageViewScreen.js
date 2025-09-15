import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const ImageViewScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.fullImage} resizeMode="contain" />
    </View>
  );
};

export default ImageViewScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width,
    height,
  },
});
