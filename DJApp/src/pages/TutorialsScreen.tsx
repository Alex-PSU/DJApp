// TutorialsScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tutorialsScreenStyles from '../styles/TutorialsScreenStyles'; // Import styles

const TutorialsScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Handle navigation or any action when the arrow icon is clicked
  }, []);

  return (
    <View style={tutorialsScreenStyles.tutorialsScreen}>
      {/* Background Image */}
      <Image
        source={require('./assets/Rectangle3.png')} // Ensure correct path
        style={tutorialsScreenStyles.tutorialsScreenChild}
      />

      {/* Home Button */}
      <TouchableOpacity style={tutorialsScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Ensure correct path
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Arrow Left Icon */}
      <TouchableOpacity 
        style={tutorialsScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Ensure correct path
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Title */}
      <View style={tutorialsScreenStyles.tutorials}>
        <Text style={tutorialsScreenStyles.tutorials1}>
          Tutorials
        </Text>
      </View>

      {/* Tutorial Cards */}
      <View style={tutorialsScreenStyles.tutorial3}>
        <View style={tutorialsScreenStyles.tutorial3Child} />
        <Text style={tutorialsScreenStyles.tba}>TBA</Text>
      </View>

      <View style={tutorialsScreenStyles.tutorial2}>
        <View style={tutorialsScreenStyles.tutorial3Child} />
        <Text style={tutorialsScreenStyles.tba}>TBA</Text>
      </View>

      <View style={tutorialsScreenStyles.tutorial1}>
        <View style={tutorialsScreenStyles.tutorial3Child} />
        <Text style={tutorialsScreenStyles.tba}>Tutorial 1</Text>
      </View>
    </View>
  );
};

export default TutorialsScreen;
