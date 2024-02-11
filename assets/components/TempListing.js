import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TempListing = ({ TempName, TempLoc, TempImg, TempPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{TempName}</Text>
      <Text style={styles.text}>{TempLoc}</Text>
      {TempImg && <Image source={{ uri: TempImg }} style={styles.image} />}
      <Text style={styles.text}>{TempPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
  text: {
    fontSize: 16, // Adjust font size as needed
    color: 'black', // Set text color
    marginBottom: 5, // Add margin bottom for spacing
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default TempListing;
