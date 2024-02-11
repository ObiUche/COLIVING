import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'; // Import ScrollView
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import Spacer from '../../components/Spacer';
import UserInput from '../../components/userInput';
import WelcomeText from '../../components/Welcome';
import QuickButton from '../../components/QuickButton';
import TempListing from '../../components/TempListing';

const ModifyListing = () => {
  const [jsonData, setJsonData] = useState({});
  const [apartmentName, setApartmentName] = useState('');
  const [apartmentLocation, setApartmentLocation] = useState('');
  const [apartmentPrice, setApartmentPrice] = useState('');
  const [apartmentBeds, setApartmentBeds] = useState('');
  const [apartmentImage, setApartmentImage] = useState(null);

  useEffect(() => {
    readJsonFile();
  }, []);

  const selectImage = async () => {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to upload an image of your listing');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      if (result.uri) {
        setApartmentImage(result.uri);
      }
    }
  };

  const readJsonFile = async () => {
    try {
      const response = await axios.get('https://coliving-test.s3.eu-west-2.amazonaws.com/apartmentData.json');
      const parsedData = response.data;
      setJsonData(parsedData);
    } catch (error) {
      console.error('Error reading JSON file:', error);
    }
  };

  const writeJsonFile = async () => {
    try {
      const newApartmentID = jsonData.apartments.length + 1;
      const newApartment = {
        id: newApartmentID,
        name: apartmentName,
        location: apartmentLocation,
        price: apartmentPrice,
        bedrooms: apartmentBeds,
        image: apartmentImage,
      };
      const updatedData = {
        ...jsonData,
        apartments: [...jsonData.apartments, newApartment],
      };
      await axios.put('https://coliving-test.s3.eu-west-2.amazonaws.com/apartmentData.json', updatedData);
      setJsonData(updatedData);
      setApartmentName('');
      setApartmentLocation('');
      setApartmentPrice('');
      setApartmentBeds('');
      setApartmentImage(null);
    } catch (error) {
      console.error('Error writing JSON file:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Spacer height={20} />
      <WelcomeText upper={'Become a part Of Co-Living'} lower={'Add a Listing'} />

      <UserInput
        question={'What would you like to call your listing ?'}
        placeholder="Enter listing name"
        value={apartmentName}
        onChangeText={setApartmentName}
      />

      <UserInput
        question={'Where is your listing based?'}
        placeholder="Enter listing location"
        value={apartmentLocation}
        onChangeText={setApartmentLocation}
      />

      <UserInput
        question={'How many bedrooms is your listing'}
        placeholder="For example 1 room"
        value={apartmentBeds}
        onChangeText={setApartmentBeds}
      />

      <UserInput
        question={'Please enter the price per month'}
        placeholder="Example £1400 Per Month"
        value={apartmentPrice}
        onChangeText={setApartmentPrice}
      />

      <Text style={styles.pictureHeader}>Your Listing will need an image</Text>

      <QuickButton name={'Upload Image'} action={selectImage} />

      <Text style={styles.pictureHeader}>Once your have uploaded the image your preview will be displayed below</Text>

      <TempListing
        TempName={apartmentName}
        TempLoc={apartmentLocation}
        TempImg={apartmentImage}
        TempPrice={apartmentPrice}
      />

      <QuickButton name={'Add Listing'} action={writeJsonFile} />

      <Button title="Add Listing" onPress={writeJsonFile} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  pictureHeader: {
    fontSize: 15,
    padding: 10,
    fontWeight: '300',
    alignSelf: 'center',
  },
});

export default ModifyListing;
