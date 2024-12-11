// StaffScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import staffScreenStyles from '../styles/StaffScreenStyles'; // Import styles

const StaffScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Handle the action when the left arrow icon is clicked
  }, []);

  return (
    <View style={staffScreenStyles.staffScreen}>
      {/* Background Image */}
      <Image
        source={require('./assets/Rectangle3.png')} // Make sure to provide the correct path
        style={staffScreenStyles.staffScreenChild}
      />

      {/* Home Button */}
      <TouchableOpacity style={staffScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Make sure to provide the correct path
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Arrow Left Icon */}
      <TouchableOpacity
        style={staffScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Make sure to provide the correct path
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Staff Title */}
      <View style={staffScreenStyles.staff}>
        <Text style={{ fontSize: 48, fontFamily: 'Bungee Shade', color: '#fff' }}>
          Staff
        </Text>
      </View>

      {/* Alex H profile section */}
      <View style={staffScreenStyles.alexH}>
        <Image
          source={require('./assets/AlexH.png')} // Make sure to provide the correct path
          style={staffScreenStyles.alexHIcon}
        />
        <TouchableOpacity
          style={staffScreenStyles.alexHChild}
          onPress={onArrowLeftIconClick}
        />
        <View style={staffScreenStyles.alexH1}>
          <Text style={{ fontSize: 32, color: '#000' }}>Alex H.</Text>
        </View>
      </View>
    </View>
  );
};

export default StaffScreen;
