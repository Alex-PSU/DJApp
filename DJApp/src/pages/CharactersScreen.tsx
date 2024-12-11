// CharactersScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import charactersScreenStyles from '../styles/CharactersScreenStyle'; // Import the styles

const CharactersScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your navigation code or action here
  }, []);

  return (
    <View style={charactersScreenStyles.charactersScreen}>
      {/* Background Image */}
      <Image
        source={require('./Rectangle3.png')} // Ensure the image path is correct
        style={charactersScreenStyles.charactersScreenChild}
      />

      {/* Home Button */}
      <TouchableOpacity style={charactersScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Ensure the image path is correct
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Arrow Left Icon */}
      <TouchableOpacity 
        style={charactersScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Ensure the image path is correct
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={charactersScreenStyles.characters}>
        Characters
      </Text>

      {/* Character Cards */}
      <View style={charactersScreenStyles.character3}>
        <View style={charactersScreenStyles.character3Child} />
        <Text style={charactersScreenStyles.eury}>Eury</Text>
      </View>
      
      <View style={charactersScreenStyles.character2}>
        <View style={charactersScreenStyles.character3Child} />
        <Text style={charactersScreenStyles.eury}>Vanir</Text>
      </View>
      
      <View style={charactersScreenStyles.character1}>
        <View style={charactersScreenStyles.character3Child} />
        <Text style={charactersScreenStyles.eury}>Rose</Text>
      </View>
    </View>
  );
};

export default CharactersScreen;
