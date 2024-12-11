// DracofestScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import dracofestScreenStyles from '../styles/DracofestScreenStyles'; // Import the styles

const DracofestScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <View style={dracofestScreenStyles.dracofestScreen}>
      {/* Background Image */}
      <Image
        source={require('./assets/Rectangle3.png')} // Ensure correct image path
        style={dracofestScreenStyles.dracofestScreenChild}
      />

      {/* Home Button */}
      <TouchableOpacity style={dracofestScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Ensure correct image path
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Arrow Left Icon */}
      <TouchableOpacity
        style={dracofestScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Ensure correct image path
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Avalon’s Dracofest Title */}
      <View style={dracofestScreenStyles.avalonsDracofest}>
        <Text style={{ fontSize: 48, fontFamily: 'Bungee Shade', color: '#fff' }}>
          Avalon’s Dracofest
        </Text>
      </View>

      {/* Character Preview */}
      <View style={dracofestScreenStyles.characterPreview}>
        <View style={dracofestScreenStyles.characterPreviewChild} />
        <Image
          source={require('./assets/Purple_d20.png')} // Ensure correct image path
          style={dracofestScreenStyles.purpleD201Icon}
        />
        <View style={dracofestScreenStyles.characterPreviewItem} />
      </View>
    </View>
  );
};

export default DracofestScreen;
