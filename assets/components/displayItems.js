import React , {useEffect, useState} from 'react';
import { Text, FlatList, StyleSheet, Image, View } from 'react-native';
import apartmentData from '../src/data/apartmentData.json';
import axios from 'axios'

const DisplayItems = ({name}) => {

  useEffect(() => {
    readJsonFile()},
    [] );

  const [data, setData] = useState({});

  const readJsonFile = async() => {

    try{

      const response = await axios.get('https://coliving-test.s3.eu-west-2.amazonaws.com/apartmentData.json');
      const parsedData = response.data ;
      setData(parsedData)
      console.log(data)

    }catch (error) { 

      console.error('Error reading Json File Darg', error)
    
    }
  }
  






  return (
    <View style={styles.container}>
      <Text style ={styles.Header}>{name}</Text>
      <FlatList
        data = {data.apartments}
        horizontal
         showsHorizontalScrollIndicator ={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.apartmentImage} />
              <Text style={styles.apartmentText}>{item.name}</Text>
              <Text>{item.location}</Text>
              <Text>£{item.price} Per Month</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  Header:{
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },


  itemContainer: {
    flexDirection: 'column', // Vertical arrangement
    marginRight: 10, // Add some spacing between items
  },

  apartmentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5, // Add some spacing between image and text
  },

  apartmentImage: {
    height: 150,
    width: 200,
    borderRadius: 10,
  },
});

export default DisplayItems;